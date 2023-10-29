:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_log)).
:- use_module(library(http/http_cors)).
:- use_module(library(http/html_write)).





% URL handlers.
:- http_handler('/compile', handle_request, [method(post)]).
:- http_handler('/', home, []).


handle_request(Request) :-
    http_read_json_dict(Request, Query),
    get_current_timestamp(TS),
    read_file(Query, Solution, TS),
    reply_json_dict(Solution).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

set_setting(http:logfile, 'service_log_file.log').

get_current_timestamp(Timestamp) :-
    get_time(Stamp),
    format_time(atom(Timestamp), '%a %b %d %Y %T GMT%z', Stamp).

%%%%%%%%%%%%%%%%%%%%%%%%%% BUSINESS LOGIC %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Read File.

read_file(_{filePath: Path}, Response, TS) :-
    (read_file_to_string(Path, Content, []) ->
        atomic_list_concat(['// Generated by Prolog OFS 1.5 transpiler ', TS], AtomTS),
        Response = _{accepted: true, fileContent: Content, date:  AtomTS}
    ; 
        Response = _{accepted: false, fileContent: 'Error, File does not exist'}
    ).

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% MAIN %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

:- initialization
    format('*** Starting Server ***~n', []),
    (current_prolog_flag(argv, [SPort | _]) -> true ; SPort='8000'),
    atom_number(SPort, Port),
    format('*** Serving on port ~d *** ~n', [Port]),
    set_setting_default(http:cors, [*]), % Allows cors for every
    server(Port).
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
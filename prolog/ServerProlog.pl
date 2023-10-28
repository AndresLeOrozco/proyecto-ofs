:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_log)).
:- use_module(library(http/http_cors)).
:- use_module(library(http/html_write)).
:- use_module(library(date)).

% URL handlers.
:- http_handler('/compile', handle_request, [method(post)]).


handle_request(Request) :-
    http_read_json_dict(Request, Query),
    read_file(Query, Solution),
    reply_json_dict(Solution).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

set_setting(http:logfile, 'service_log_file.log').

%%%%%%%%%%%%%%%%%%%%%%%%%% BUSINESS LOGIC %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Read File.

read_file(_{filePath: Path}, Response) :-
    (read_file_to_string(Path, Content, []) ->
        get_current_time(Timestamp),
        atom_concat(Timestamp, '\n', TempTime),
        atom_concat(TempTime, Content, NewContent),
        Response = _{accepted: true, fileContent: NewContent}
    ; 
        Response = _{accepted: false, fileContent: 'Error, File doesn\'t exist'}
    ).


get_current_time(Timestamp) :-
    get_time(Stamp),
    stamp_date_time(Stamp, DateTime, 'UTC'),
    format_time(atom(Timestamp), '%Y-%m-%d %H:%M:%S', DateTime).

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% MAIN %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

:- initialization
    format('*** Starting Server ***~n', []),
    (current_prolog_flag(argv, [SPort | _]) -> true ; SPort='8000'),
    atom_number(SPort, Port),
    format('*** Serving on port ~d *** ~n', [Port]),
    set_setting_default(http:cors, [*]), % Allows cors for every
    server(Port).
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
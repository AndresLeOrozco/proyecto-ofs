/*

Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

*/
:- use_module(library(pcre)).
%%%%%%%%%%%%%%%%%%%%%%% Utils %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% eliminate_null(+OFSAst, -OFSAstWithoutNulls)

eliminate_null(prog(LS), prog(LSWithoutNulls)) :- 
	delete(LS, null, LSWithoutNulls).
	
valid_init_identifier(Letter) :-
    string(Letter),
    re_match("[A-Za-z_$]", Letter).

valid_rest_identifier(Letter) :-
	string(Letter),
    re_match("[A-Za-z0-9_$]", Letter).
	
valid_number_symbol(Number) :-
	string(Number),
    re_match("[-+]|\\d", Number).

valid_number(Number) :-
	string(Number),
    re_match("[0-9]", Number).
	
valid_relational_operator(Operator) :-
	string(Operator),
    member(Operator, ["==","!=","<", ">", ">=","<="]).
	
valid_arith_operator(Operator) :-
	string(Operator),
    member(Operator, ["*", "/", "%", "+", "-"]).

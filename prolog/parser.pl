/*

Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

*/
:-[utils].
:-[lexer].
%%%%%%%%%%%%%%%%%%%%%%% Parser %%%%%%%%%%%%%%%%%%%%%%%%%%%


ofs_parser( prog([LI|LS]) ) --> importStatementList(LI), statementList(LS).

importStatementList([I | IL]) --> importStatement(I), importStatementList(IL).
importStatementList([]) --> [],!.

statementList([S|LS]) --> spaces,statement(S), spaces,statementList(LS).
statementList([]) --> spaces,[],!.

statement(const(I,RS)) -->  spaces,const, ident(I), right_side(RS).
statement(let(I,RS)) -->  spaces,let, ident(I), right_side(RS).
statement( null ) --> spaces,semicolon, !.
statement(E) --> spaces, expression(E).

importStatement(import(I, from(Str))) --> import, importedSymbols(I), from, string(Str).


importedSymbols(StringList) --> "{", import_idents([I | IRS]), "}", {atomic_list_concat([I | IRS],",", Result), atomic_list_concat(["{",Result,"}"], AtomList), atom_string(AtomList, StringList)}.
importedSymbols(I) --> ident(I).

import_idents([I | IRS]) --> ident(I), import_idents_right_side(IRS).

import_idents_right_side([I|IRS]) --> comma, ident(I),import_idents_right_side(IRS).
import_idents_right_side([]) --> [].

%%%%%%%%%%%%%%%% Expresions %%%%%%%%%%%%%%%%

right_side(undefined) --> [].
right_side(E) --> assignment, expression(E), spaces.

expression(PE) --> pipe_expression(PE).

pipe_expression(expr(PE)) --> ofs_expression(OfsExpr), rest_pipe(RP),{append([OfsExpr],RP,PE)}.

rest_pipe([]) --> [].
rest_pipe(PE) --> spaces, ">>",spaces , ofs_expression(OfsExpr), rest_pipe(RP),{append([OfsExpr],RP,PE)}.



ofs_expression(I) --> iterate_expression(I).
ofs_expression(M) --> map_expression(M).
ofs_expression(F) --> filter_expression(F).
ofs_expression(C) --> cut_expression(C).
ofs_expression(es6(ES6)) --> es6_expression(ES6).


iterate_expression(iterate(IT)) --> "[*", expression(expr([EI|_])), ",", expression(expr([ED|_])), "]",{append([EI],[ED],IT)}.

map_expression(map(E)) --> "[>", expression(expr([E|_])), "]".

filter_expression(filter(E)) --> "[?", expression(expr([E|_])), "]".

cut_expression(cut(E)) --> "[!", expression(expr([E|_])), "]".

es6_expression(AE) --> array_expression(AE).
es6_expression(LE) --> lambda_expression(LE).
es6_expression(BE) --> boolean_expression(BE).
es6_expression(CE) --> conditional_expression(CE).


boolean_expression(BE) --> relational_expression(RE), rest_boolean_expression(RBE),{append(RE,RBE,BE)}.

rest_boolean_expression([]) --> [].
rest_boolean_expression([BO| RR]) --> boolean_operator(BO), relational_expression(RE), rest_boolean_expression(RBE),{append(RE,RBE,RR)}.

relational_expression(RE) --> arith_expression(AE), rest_relational_expression(RRE),{append(AE,RRE,RE)}.

rest_relational_expression([]) --> [].
rest_relational_expression([RO| RR]) --> relational_operator(RO), arith_expression(AE), rest_relational_expression(RRE),{append(AE,RRE,RR)}.

conditional_expression([conditional([es6(RE)|CE])]) --> relational_expression(RE), "?", expression(expr([EI|_])), ":", expression(expr([ED|_])),{append([EI],[ED],CE)}.

arith_expression(AE) -->  factor_expression(FA), rest_arith_expression(RAE),{append([FA],RAE,AE)}.

rest_arith_expression([]) --> [].
rest_arith_expression([OA|TA]) --> arithmetical_operator(OA), factor_expression(FA), rest_arith_expression(RAE),{append([FA],RAE, TA)}.


factor_expression(LE) -->  literal_expression(LE).
factor_expression(SE) -->  simple_expression(SE).
factor_expression(UE) -->  unary_expression(UE).
factor_expression(PE) -->  parenthesis_expression(PE).

literal_expression(CN) --> completeNumber(CN). 
literal_expression(S) --> string(S). 
literal_expression(B) --> boolean(B),{}. 

simple_expression(SE) --> qualifiable_id(QID), rest_simple_expression(RSE), {append([QID],[RSE],SE)}.

rest_simple_expression([]) --> [].
rest_simple_expression(equals(E)) --> spaces, "=", spaces, expression(expr([E|_])).
rest_simple_expression(A) --> args_expression(A).


unary_expression(minus(E)) --> spaces, "-", expression(expr([E|_])).
unary_expression(interrogant(E)) --> spaces, "!", expression(expr([E|_])).

parenthesis_expression(parenth(E)) --> spaces,"(", spaces, expression(expr([E|_])), spaces, ")",spaces.

qualifiable_id(QI) --> access_expression(AE), rest_qualifiable_id(RQI),{append([AE],RQI,QI)}.

rest_qualifiable_id([AE|RQI]) --> ".", access_expression(AE), rest_qualifiable_id(RQI).
rest_qualifiable_id([]) --> [].

args_expression([args(RAE)]) --> spaces, "(",spaces, rest_args_expression(RAE),spaces, ")" ,spaces.
args_expression([args([])]) --> spaces,"(",spaces, ")",spaces.

rest_args_expression([E|RAE]) --> expression(expr([E|_])), rest_args_expression_2(RAE).
rest_args_expression([]) --> [].

rest_args_expression_2([E|RAE]) --> ",", expression(expr([E|_])), rest_args_expression_2(RAE).
rest_args_expression_2([]) --> [].

access_expression(I) --> ident(I).
access_expression(squareParenth(E)) --> "[", expression(expr([E|_])), "]".

array_expression([array(args(RAE), rest(RAER))]) --> "[", rest_array_expression(RAE), "]", rest_array_expression_right(RAER).

rest_array_expression(FAE) --> spaces, expression(expr([Expr| _])),spaces, right_rest_array_expression(RRAR), {append([Expr], RRAR, FAE)}.
rest_array_expression([]) --> [].

right_rest_array_expression(FRAE) --> spaces, ",", spaces, expression(expr([E| _])), right_rest_array_expression(RRAE), {append([E], RRAE, FRAE)}.
right_rest_array_expression([]) --> [].

rest_array_expression_right(FRAE) --> spaces, "+", spaces,  expression(expr([E| _])), rest_array_expression_right(RAER), {append([E], RAER, FRAE)}.
rest_array_expression_right([]) --> [].

lambda_expression([lambExpr(SArgs, E)]) --> params_expression(PE), spaces, "->", spaces, expression(expr([E|_])), {atomic_list_concat(PE, Args), atom_string(Args, SArgs)}.

params_expression([I]) --> ident(ident(I)).
params_expression(["(", PE, ")"]) --> spaces,"(", spaces,  ident(ident(I)), rest_params_expression(RP), spaces,")",spaces, {atomic_list_concat([I | RP], PE)}.

rest_params_expression([",", I | RP]) --> spaces, ",", spaces, ident(ident(I)), rest_params_expression(RP).
rest_params_expression([]) --> [].

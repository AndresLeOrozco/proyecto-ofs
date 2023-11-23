/*

Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

*/
%%%%%%%%%%%%%%%%%%%%%%%% Lexer  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

semicolon --> spaces, ";", spaces.

ident(ident(Ident)) --> spaces, [I], {string_codes(S,[I]), valid_init_identifier(S)}, rest_ident(RS) , spaces,{atomic_list_concat([S | RS], Str), atom_string(Str,Ident)}.

rest_ident([S | RS]) --> [I], {string_codes(S,[I]), valid_rest_identifier(S)}, rest_ident(RS).
rest_ident([]) --> [].


completeNumber(num(Number)) --> spaces, num(X), spaces, {atomic_list_concat(X, Atom), atom_number(Atom, Number)}.

num([S | LN]) --> [X], {string_codes(S,[X]), valid_number_symbol(S)}, rest_numb(LN).
rest_numb([S | LN]) --> [X], {string_codes(S,[X]), valid_number(S)}, rest_numb(LN).
rest_numb([]) --> [].

relational_operator(relOp("<")) --> spaces, "<",  spaces.
relational_operator(relOp(">")) --> spaces, ">",  spaces.
relational_operator(relOp(ROp)) --> spaces, [Op], {string_codes(SAOp,[Op])}, relational_operator_second(SAOp, ROp).
relational_operator_second(SAOp, ROp) --> [Op], {string_codes(SAOp2,[Op]), string_concat(SAOp, SAOp2, ROp), valid_relational_operator(ROp)}.

arithmetical_operator(aritOp(SAOp)) --> spaces, [Op], {string_codes(SAOp,[Op]), valid_arith_operator(SAOp)}.

boolean_operator(bool("&&")) --> spaces, "&&", spaces.
boolean_operator(bool("||")) --> spaces, "||", spaces.

boolean(bool("true")) --> spaces, "true", spaces.
boolean(bool("false")) --> spaces, "false", spaces.

assignment --> spaces, "=", spaces.
comma --> spaces, ",", spaces.

const --> spaces, "const", spaces. 
let --> spaces, "let", spaces.
import --> spaces, "import", spaces.
from --> spaces, "from", spaces.
printIt --> spaces, "printIt", spaces.

space --> (" " ; "\t" ; "\n" ; "\r"; commentBlock).

spaces --> space, spaces.
spaces --> [].

spaces --> comment.

comment --> "//", rest_comment.
rest_comment --> "\n".
rest_comment --> [_],  rest_comment.


commentBlock --> "/*", rest_commentBlock.
rest_commentBlock --> "*/".
rest_commentBlock --> [_], rest_commentBlock.

string(str(Str)) --> spaces,"'", stringContent(STRCO), "'", spaces,{atomic_list_concat(STRCO, STRC), atomic_list_concat(['"', STRC, '"'], String), atom_string(String, Str)}.

stringContent([Char | RC]) --> [C], {string_codes(Char,[C]), dif(C, 39) }, stringContent(RC).
stringContent([]) --> [].
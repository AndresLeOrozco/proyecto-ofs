/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
Generator of natural numbers
*/
export default function* generator(init = 0) {
    let i = init;
    while (true) {
        yield i;
        i++;
    }
}
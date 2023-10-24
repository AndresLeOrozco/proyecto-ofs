/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
class Stream to manage iterables in a functional way
*/
export class Stream{
    #iterable
    constructor(iterable){
        this.#iterable = iterable
    }
    map( f ){
        function* generator(iterable){
            for (const item of iterable){
                yield f(item)
            }
        }
        return new Stream(generator(this.#iterable))
    }

    filter( f ){ 
        function* generator(iterable){
            for (const item of iterable){
                if (f(item)){
                    yield item
                }
            }
        }
        return new Stream(generator(this.#iterable))
    }

    toList(){    
        return [...this.#iterable]
    }
}

export function* iterate(init, f){
    let current = init
    while(true){
        yield current
        current = f(current)
    }

}




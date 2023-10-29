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
    iterable
    constructor(iterable){
        this.iterable = iterable
    }
    map( f ){
        function* generator(iterable){
            for (const item of iterable){
                yield f(item)
            }
        }
        return new Stream(generator(this.iterable))
    }

    filter( f ){ 
        function* generator(iterable){
            for (const item of iterable){
                if (f(item)){
                    yield item
                }
            }
        }
        return new Stream(generator(this.iterable))
    }

    // forEach( f ){ 
    //     for (const item of this.iterable){
    //         f(item)
    //     }
    // }

    cut( n ){ 
        function* generator(iterable){
            let i = n
            while(i > 0){
				yield iterable.next().value
				i--
			}
        }
        return new Stream(generator(this.iterable))
    }


    toList(){    
        return [...this.iterable]
    }
}
export function* iterate(init, f, end=100){
    let current = init
    while(current <= end){
        yield current
        current = f(current)
    }
}




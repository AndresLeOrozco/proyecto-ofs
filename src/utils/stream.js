/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
class Stream to manage iterables in a functional way
*/
class Stream{
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

    forEach( f ){ 
        for (const item of this.iterable){
            f(item)
        }
    }


    toList(){    
        return [...this.iterable]
    }
}
function* iterate(init, f, end=100){
    let current = init
    while(current <= end){
        yield current
        current = f(current)
    }
}

module.exports = {Stream, iterate}



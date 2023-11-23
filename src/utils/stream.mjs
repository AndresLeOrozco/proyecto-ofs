/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
class Stream to manage iterables in a functional way
*/
export class Stream {
    iterable;

    constructor(iterable) {
        this.iterable = iterable;
    }

    map(f) {
        function* generator(iterable) {
            for (const item of iterable) {
                yield f(item);
            }
        }
        return new Stream(generator(this.iterable)).toList();
    }

    filter(f) {
        function* generator(iterable) {
            for (const item of iterable) {
                if (f(item)) {
                    yield item;
                }
            }
        }
        return new Stream(generator(this.iterable));
    }

    cut(n) {
        function* generator(iterable) {
            let i = n;
            for (const item of iterable) {
                if (i <= 0) {
                    break;
                }
                yield item;
                i--;
            }
        }
        return new Stream(generator(this.iterable));
    }

    toList() {
        return [...this.iterable];
    }

    static iterate(init, f, end = 100) {
        function* iterate() {
            let current = init;
            while (current <= end) {
                yield current;
                current = f(current);
            }
        }
        return new Stream(iterate());
    }
}


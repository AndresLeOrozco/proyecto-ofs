
const {Stream, iterate} = require("../src/utils/stream.js");

const nats = iterate(0, x => x + 1);
const even = new Stream(nats).filter(x => x % 2 == 0);
const evenLessThanEleven = even.filter(x => x < 11);
evenLessThanEleven.forEach(x=>console.log(x))





import { Stream } from "../src/utils/stream.mjs"
const nats = Stream.iterate(0, x => x + 1);
const even = nats.filter(x => x % 2 == 0);
const evenLessThanEleven = even.filter(x => x < 11);
evenLessThanEleven.map(x=>console.log(x)).cut(10).toList();




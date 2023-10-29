
import { Stream, iterate } from "../src/utils/stream.mjs"
const nats = iterate(0, x => x + 1);
const even = new Stream(nats).filter(x => x % 2 == 0);
const evenGraterThan = even.filter(x => x > 10);
const onlyFiveAfterTen = evenGraterThan.cut(5);
onlyFiveAfterTen.map(x => console.log(x)).toList();

// Only change code below this line
function* insideGenerator1() {
    for (i = 1; i <= 5; i++) {
        var x = i + "#";
        fifteenArray.push(x);
        yield "InsideGenerator1";
    }
}
function* insideGenerator2() {
    for (i = 10; i <= 15; i++) {
    var x = i + "#";
    fifteenArray.push(x);
    yield "InsideGenerator2";
    }
}
function* insideGenerator3() {
    for (i = 6; i <= 9; i++) {
        var x = i + "#";
        fifteenArray.push(x);
        yield "InsideGenerator3";
    }
}
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
var fifteenArray = [];
const iterator = myGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(fifteenArray);
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
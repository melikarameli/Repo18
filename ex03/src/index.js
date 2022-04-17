// Only change code below this line
function* insideGenerator1() {
    for (i = 1; i <= 5; i++) {
        generatorArray.push(i);
        yield "InsideGenerator1";
    }
}
function* insideGenerator2() {
    var x = "A";
    generatorArray.push(x);
    yield "A";
    var x = "r";
    generatorArray.push(x);
    yield "r";
    var x = "e";
    generatorArray.push(x);
    yield "e";
    var x = "n";
    generatorArray.push(x);
    yield "n";
    var x = "a";
    generatorArray.push(x);
    yield "a";
}
function* insideGenerator3(x) {
    for (i = 1; i <= 3; i++) {
        generatorArray.push(x);
        x = x + 1;
        yield "InsideGenerator3";
    }
}
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3(6);
}
var generatorArray = [];
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
console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };
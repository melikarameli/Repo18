let myArr = [];
// Only change code below this line
function* multiplication(x) {
    var y = x + 1;
    for (var i = 1; i <= y; i++ ) {
        x = x * 2;
        myArr.push(x);
        yield "I am " + i + " yield";
    }
}
const multi = multiplication(3); 
console.log(multi.next());
console.log(multi.next());
console.log(multi.next());
console.log(myArr);
// Only change code above this line
module.exports = multiplication;
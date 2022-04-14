let myArr = [];
// Only change code below this line
function multiplication(x) {
    for (var x; x * 2; x++) {
        yield x;
        myArr.push(x);
    }
}
// Only change code above this line
module.exports = multiplication;
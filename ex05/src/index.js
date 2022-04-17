// Only change code below this line
let shoppingList = new Map([
    [1, 'Banana'],
    [2, 'Pineapple'],
    [3, 'Pear'],
    [4, 'Carrot'],
    [5, 'Apple'],
    ]);
let arrKey = [
    ['groceries:', 'Banana'],
    ['groceries:', 'Pineapple'],
    ['groceries:', 'Pear'],
    ['groceries:', 'Carrot'],
    ['groceries:', 'Apple'],
    ];
let arrValue = [
    ['amount:', 3],
    ['amount:', 5],
    ['amount:', 2],
    ['amount:', 10],
    ['amount:', 1.5],
    ]
shoppingList = [arrKey, arrValue];
console.log(shoppingList);
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };
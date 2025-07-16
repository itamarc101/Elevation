const { error } = require("console");
const { boolean } = require("yargs");

//should return true if n is even, false otherwise
function isEven(n) {
    return n % 2 == 0 ? true : false;
}



//should remove at least one element from the array `arr`
function removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr;
}

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}

function validate(arr) {
    const booleans = arr.filter(item => typeof item === 'boolean');

    if (booleans.length === 0) {
        return {error: "Need at least one boolean" };
    }

    const trueCount = booleans.filter(b => b === true).length;
    const falseCount = booleans.length - trueCount;

    return trueCount > falseCount;

}

function add(x, y) {
    let stuff = [];
    stuff.push(x, y);
}


module.exports = { add, isEven, removeAtLeastOne, simplify, validate };

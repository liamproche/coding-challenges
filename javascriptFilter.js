// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

function getEvenNumbers(numbersArray){
    return numbersArray.filter(num=>num % 2 === 0)
}

console.log(getEvenNumbers([1,2,3,4,5]))
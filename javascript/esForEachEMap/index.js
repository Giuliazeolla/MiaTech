let numbers = [1, 2, 3, 4, 5];

numbers.forEach (function(number) {
    console.log(number * 2);
});

let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers);
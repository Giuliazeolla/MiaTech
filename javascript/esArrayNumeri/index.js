let numbers = [44, 26, 13, 17];
console.log(numbers);



let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


let temp = 0;

for(let i = 0; i < numbers.length / 2; i++) {
    temp = numbers[i];
    numbers[i] = numbers[numbers.length -1 - i];
    numbers[numbers.length - 1 - i] = temp;
};
console.log(numbers);



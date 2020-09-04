"use strict";
let input = confirm('Хотите числа вводить?');
let total = 0;

total = ++total;

while (input) {
    input = +prompt();
    total += input;
    console.log(input);
}
console.log(total);
'use strict';

// Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => "0 1 1 2"

// fib(7) => "0 1 1 2 3 5 8"

// fib('7') => ""

// fib(1) => "0"

// fib(0) => ""

function fib(num) {
    let result = [];
    let strResult = "";
    if (typeof num !== 'number' || num === 0 || !Number.isInteger(num)) {
        return console.log('""');
    } else {
        for (let i = 0; i < num; i++) {
            if (i > 1) {
               result[i] = result[i-2] + result[i-1]; 
            } else {
                result[i] = i;
            }

            if (i+1 === num) {
                strResult += result[i];
                return console.log(strResult);
            } else {
                strResult += result[i];
                strResult += ' ';
            }
        }
    }
}

fib(4.1);
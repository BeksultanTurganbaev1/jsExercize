'use strict';

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 -возвращается 0. Дробные числа разрешены

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0


function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' || 
        typeof b !== 'number' || 
        typeof c !== 'number' || 
        typeof d !== 'number') {
        return console.log(0);
    } else {
        return console.log(Math.max(a, b, c, d));
    }
}

findMaxNumber('1', 25, 6.6, 11);
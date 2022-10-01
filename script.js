'use strict';

//****************pratice*****************
//(*) Продвинутые задания на использование функций

function getTimeFromMinutes (x) {
    if (x > 600 || x < 0 || !Number.isInteger(x)) {
        console.log("Ошибка, проверьте данные");
    }else {
        let time, chas, rezult;
        time = Math.floor(x/60);
        if (time === 0) {
            chas = "ов";
        }else {
            chas = "a";
        }
        if (x < 60) {
            rezult = x;
        }else {
            rezult = x - (time * 60);
        }
        console.log(`Это ${time} час${chas} и ${rezult} минут`);
    }
    
}

getTimeFromMinutes(600);


function findMaxNumber(y1, y2, y3, y4) {
    const number = [y1, y2, y3, y4];
    let rezult;
    for (let i = 0; i <= number.length; i++) {
       if(number[i] < 4 || typeof number[i] === 'string') {
            rezult = 0;
       }else {
            for (let j = 1; j <= number.length; j++) {
                if (number[i] < number[j]) {
                    rezult = number[j];
                }
            }
       }
    }
    console.log(rezult);
}

findMaxNumber(1, 2, 4, 1.1);


//(**)Задача с собеседований на числа Фибоначчи
function fib(a) {
    let rezult = "", j = 1;
    if(a < 0 || typeof a !== 'number') {
        console.log(rezult);
    }else {
        for (let i = 0; i < a; i++) {
            if(i >= 2) {
                let x = 0, y = 0;
                for(j; j < rezult.length; j += 2){
                    x = Number(rezult.slice(j-1, j));
                    y += x;
                }
                rezult += y;
                rezult += " ";
                j -= 2;
            }else {
                rezult += i;
                rezult += " ";
            }
        }
    }
    return console.log(`"${rezult}"`);
}
fib(5);







//(*) Продвинутые задания на использование функций
// 1)
function getTimeFromMinutes(time) {
    if (typeof time !== 'number' || !Number.isInteger(time) || time < 0 || time > 600) {
        return console.log("Ошибка, проверьте данные");
    } else {
        let clock = 0, 
            minutes = 0,
            ending0 = "a",
            ending1 = "ов";
        clock = Math.floor(time / 60);
        minutes = time - (60 * clock);
        if (clock === 1){
            return console.log(`Это ${clock} час и ${minutes} минут`);
        } else if (clock >= 2 && clock <= 4) {
            return console.log(`Это ${clock} час${ending0} и ${minutes} минут`);
        } else {
            return console.log(`Это ${clock} час${ending1} и ${minutes} минут`);
        }      
    }
}

getTimeFromMinutes(400);
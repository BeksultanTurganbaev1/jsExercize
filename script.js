'use strict';

// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            // js: '20%',
            // php: '10%'
        },
        exp: '1 month'
    }
};


function showExperience(plan) {
    const showExp = plan.skills.exp;
    return console.log(showExp);
}

showExperience(personalPlanPeter);




// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {

    for (let key in plan) {

        if (plan[key] == 'object') {
            for (let i in plan[key]) {
                console.log(`${i} = ${plan[key][i]}`);
            }
        } else {
            console.log(`${key} = ${plan[key]}`);
        }
    }


    // if (isEmpty(plan.skills.programmingLangs) == false) {
    //     return console.log("''");
    // } else {
    //     const {js, php} = plan.skills.programmingLangs;
    //     const programmingLangs = `Язык js изучен на ${js} Язык php изучен на ${php}`;
    //     return console.log(programmingLangs);
    // }
}

showProgrammingLangs(personalPlanPeter);
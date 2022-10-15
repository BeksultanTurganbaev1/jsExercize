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
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(aboutMe) {
        let lang = '';
        for (let key in aboutMe.skills.languages) {
            lang += aboutMe.skills.languages[key];
            lang += ' ';
        }
        return console.log(`Мне ${aboutMe.age} и я владею языками: ${lang.toUpperCase()}`);
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

    if (Object.keys(plan.skills.programmingLangs) == 0) {
        return console.log("");
    } else {
        let progLangs = '';
        for (let key in plan.skills.programmingLangs) {
            progLangs += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}`;
            progLangs += '\n';
        }
        return console.log(progLangs);
    }
}

showProgrammingLangs(personalPlanPeter);


// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
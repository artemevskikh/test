'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
};

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
        
                if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                    console.log("done");
                    appData.expenses[a] = b;
                } else {
                    i = i - 1;
                }
        }
    },
    detectDayBudjet: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("По какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        function chooseOptExpenses() {
            for (let i = 0; i < 3; i++) {
                let a = prompt ("Статья необязательных расходов?", ""),
                    b = prompt ("Во сколько обойдется?", "");
        
                    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                    && a != '' && b != '' && a.length < 50) {
                    console.log("done");
                    appData.optionalExpenses[a] = b;
                 } else {
                    i = i - 1;
                 }
            }
        }
    },
    chooseIncome: function() {
        let items;
        do {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        while (
        !((typeof(items)) === 'string' && (typeof(items)) != null && items != '') );
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();

        appData.income.forEach(function(item, i, arr) {
            i = i + 1;
            alert('Способы доп.заработка: ' + i + ' ' + item);
        });
      
    }
};

for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key);
    };

'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'[0]),
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    // mandatoryExp1 = document.querySelector('#expenses_1'),
    // mandatoryExp2 = document.querySelector('#expenses_2'),
    // mandatoryExp3 = document.querySelector('#expenses_3'),
    // mandatoryExp4 = document.querySelector('#expenses_4'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
});

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

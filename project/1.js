'use strict';

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: "",
    optionalExpenses: "",
    income: [],
    savings: false
};

var quest1 = prompt("Введите обязательную статью расходов в этом месяце");
var quest2 = prompt("Во сколько обойдется?");

appData.expenses = quest1 + " : " + quest2;

var budjetOneDay = alert(appData.budget / 30);




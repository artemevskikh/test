let btnStartPayment = document.getElementById('start'),
    bdgValue = document.getElementsByClassName('budget-value'),
    daybdgValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    chooseExp = document.getElementsByClassName('expenses-item'),
    btn = document.getElementsByTagName('button'),
    optionalExp = document.querySelectorAll('.optionalexpenses-item'),
    mandatoryExp1 = document.querySelector('#expenses_1'),
    mandatoryExp2 = document.querySelector('#expenses_2'),
    mandatoryExp3 = document.querySelector('#expenses_3'),
    mandatoryExp4 = document.querySelector('#expenses_4'),
    checkAccumulation = document.querySelector('#savings'),
    sumAccum = document.querySelector('.choose-sum'),
    percentAccum = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let btn1 = btn[0],
    btn2 = btn[1],
    btn3 = btn[2];
   





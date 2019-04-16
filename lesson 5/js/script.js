let nav = document.getElementsByTagName('nav'),
    ul = document.getElementsByClassName('menu'),
    btn = document.getElementsByClassName('menu-item'),
    tit = document.getElementById('title'),
    div = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv'),
    question = document.getElementById('prompt'),
    div2 = tit.cloneNode(true);

div2.innerHTML = 'Мы продаем только подлинную технику Apple';
console.log(div2);
//div[1].appendChild(div2);
div[1].replaceChild(div2, tit);
div[1].removeChild(adv[0]);

btn[0].style.backgroundColor = 'red';

var newBox = document.createElement('ul');
newBox.innerHTML = '<li class="menu-item">Пятый пункт</li>';

question.innerHTML = 'Каково ваше отношение к технике Apple?';

//var newTitle = document.createElement('div');
//newTitle.textContent = 'Мы продаем только подлинную технику Apple';

//tit.appendChild(newTitle);
//console.log(newTitle);
//div[0].replaceChild(div2, div[0]);

ul[0].appendChild(newBox);

ul[0].insertBefore(btn[3], btn[1]);
ul[0].insertBefore(btn[3], btn[2]);








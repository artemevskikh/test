let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth, //ширина контента
    height = box.clientHeight; //высота контента

//let width = box.offsetWidth, //ширина контента вместе в паддингами и полосами прокрутки
//    height = box.offsetHeight; //высота контента вместе в паддингами и полосами прокрутки

// let width = box.scrollWidth, //ширина контента вместе в паддингами и полосами прокрутки
//     height = box.scrollHeight; //высота контента вместе в паддингами и полосами прокрутки

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

btn.addEventListener('click', function() {
    //box.style.height = box.scrollHeight + 'px'; //жестко задаем высоту
    box.scrollTop = 0;
    box.scrollLeft = 0;
});

scrollBy(0, 200);//отматывает на кол-во пикселей
scrollTo(0, 1200);//переход по координатам

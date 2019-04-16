'use strict';

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// };

//  showFirstMessage("Hello World");
//  console.log(num);

// let calc = function(a,b) {
//     return (a + b);
// }

// let calc = (a,b) => (a + b);

// console.log(calc(23,45));

// console.log(calc(232,145));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// //console.log(Math.round(twelve));

// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// function first(){
//     setTimeout(function(){
//         console.log(1);
//     }, 500 );
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("Я учу"+ lang);
//     callback();
// }

// learnJS("JavaScript", function() {
//     console.log("Я прошел третий урок!")
// })


// function number(first, callback){
//     setTimeout(function(){
//         console.log("Номер "+ first);
//     }, 500 );
//     callback();
// }

// number(1, function() {
//     console.log(2);
// })

// let options = {
//     width: 1024,
//     heidth: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение' + options[key]);
// }

// console.log(Object.keys(options).length);

//  let arr = ["first", 2, 3, "four", 5];


//  for (let i = 0; i < arr.length; i++) {
//      console.log(arr[i]);
//  }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// })

//  console.log(arr);


// let mass = [1,3,4,6,7];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');

// console.log(arr);

// let arr = ["asfdf", 'gvewg', 'gggg', 'ddddd'],
// i = arr.join(', ');

// console.log(i);
function hello() {
    console.log("Hello world!");
}

hello();

function hi() {
    console.log("Hello world!");
}

hi();

let arr = [1, 15, 4, 105, 98, 65],
i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

 console.log(arr);

// let soldier = {
//     health: 300,
//     armor: 100
// };

// let John = {
//     health: 100
// };

// John.__proto__ = soldier;

// console.log(John);
// console.log(John.armor);
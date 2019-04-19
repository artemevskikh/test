//событие сработает когда полностью загрузится вся DOM структура
window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //получаем все необходимое о табах
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //скрываем ненужные табы
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); //удаляем класс отображения
            tabContent[i].classList.add('hide'); //добавляем класс скрытия
        }
    }
 
    //начинаем с первого таба
    hideTabContent(1);

    //показываем определенный таб контент
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) { //проверяем действительно ли этот элемент скрыт
            tabContent[b].classList.remove('hide'); //удаляем класс скрытия
            tabContent[b].classList.add('show') //добавляем класс отображения
        }
    }

    //делегирование
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //проверка на то куда кликнули
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) { //то куда мы нажали совпадает с табом
                    hideTabContent(0); //скроем все табы
                    showTabContent(i); //показываем нужный таб
                    break;
                }
            }
        }
    });
});
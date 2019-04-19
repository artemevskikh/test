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

    //Timer

    let deadline = '2019-04-20';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000/60) % 60),
        hours = Math.floor((t/(1000*60*60))-5);

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds; 
            } else {
                seconds.textContent;
            };

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes; 
            } else {
                minutes.textContent;
            };

            if (t.hours < 10) {
                hours.textContent = '0' + t.hours; 
            } else {
                hours.textContent;
            };

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
});
//событие сработает когда полностью загрузится вся DOM структура
window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //получаем все необходимое о табах
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //скрываем ненужные табы
    var hideTabContent = a => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); //удаляем класс отображения
            tabContent[i].classList.add('hide'); //добавляем класс скрытия
        }
    }
 
    //начинаем с первого таба
    hideTabContent(1);

    //показываем определенный таб контент
    var showTabContent = b => {
        if (tabContent[b].classList.contains('hide')) { //проверяем действительно ли этот элемент скрыт
            tabContent[b].classList.remove('hide'); //удаляем класс скрытия
            tabContent[b].classList.add('show') //добавляем класс отображения
        }
    }

    //делегирование
    info.addEventListener('click', (event) => {
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

    let deadline = '2019-05-27';

    var getTimeRemaining = (endtime) => {
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

    var setClock = (id, endtime) => {
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
            };
        }
    }

    setClock('timer', deadline);

    //modal - узнать больше

    let more = document.querySelector('.more'), //кнопка
        desc = document.getElementsByClassName('description-btn'),
        overlay = document.querySelector('.overlay'), //модальное окно
        close = document.querySelector('.popup-close'); //крестик

    more.addEventListener('click', function() {
        overlay.style.display = 'block'; //меняем стили - принимаем блочную модель
        this.classList.add('more-splash'); //анимация
        document.body.style.overflow = 'hidden'; //запрещаем прокрутку страницы при открытом мод окне
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none'; //закрытие модального окна
        more.classList.remove('more-splash'); //анимация
        document.body.style.overflow = ''; //возвращаем прокрутку страницы
    })



    var descBtn = () => {
        for (let i = 0; i < desc.length; i++) {
            desc[i].addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash'); //анимация
                document.body.style.overflow = 'hidden'; //запрещаем прокрутку страницы при открытом мод окне
            });
        }
    }

    descBtn();

    //Form

    let message = { //объект для сообщения
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); //оповещение пользователя

        statusMessage.classList.add('status'); //класс прописан в css

    form.addEventListener('submit', function(event) { //при клике на кнопку отправить, отправляем запрос на сервер, вешаем ее на форму
        event.preventDefault(); //избавляемся от перезагрузки страницы
        form.appendChild(statusMessage); //оповещение пользователя о статусе запроса

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php'); //POST - для отправки на сервер
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form); //передаем данные в формате ключ: значение

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        // очищаем поля
        for (let i = 0; i < input.length; i++) {
             input[i].value = '';
        }

    });

    let formContact = document.querySelector('#form'),
        inputContact = formContact.getElementsByTagName('input'),
        statusMessageContact = document.createElement('div');

        statusMessageContact.classList.add('status');

    formContact.addEventListener('submit', function(event) {
        event.preventDefault();
        formContact.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(formContact);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < inputContact.length; i++) {
            inputContact[i].value = '';
        }
    });

    //Slider

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');


showSlides(slideIndex);

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
     // for (let i = 0; i < slides.length, i++) {
     //     slides[i].style .display = 'none';
     // }
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
 }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    })

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if (restDays.value == '' || persons.value < 1) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if (persons.value == '' || restDays.value < 1) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        })
});



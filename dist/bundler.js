(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calc() {


    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (+daysSum && +personsSum) ? ((daysSum + personsSum) * 4000) : 0;

        if (restDays.value == '') {
            totalValue.innerHTML = 0;
            console.log(total)
            console.log(Boolean(total))

        } else {
            totalValue.innerHTML = total;
        }
        restDays.addEventListener('change', function () {
            daysSum = +this.value;
            total = (+daysSum && +personsSum) ? ((daysSum + personsSum) * 4000) : 0;

            if (persons.value == '') {
                totalValue.innerHTML = 0;
                console.log(total)
                console.log(Boolean(total))
            } else {
                totalValue.innerHTML = total;
            }
        })
    })
    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })
}
module.exports = calc;
},{}],2:[function(require,module,exports){
function form() {
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с Вами свяжемся!",
        failure: "Что-то пошло не так"
    }
    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formBottom = document.querySelector('#form');


    statusMessage.classList.add('status');
    function sendForm(element) {
        element.addEventListener('submit', function (e) {
            e.preventDefault();
            element.appendChild(statusMessage);
            let formData = new FormData(element);
            console.log(formData);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json, charset=UTF-8');
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject()
                        }
                    }
                    request.send(data);
                })
            }



            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => console.log("error"), statusMessage.innerHTML = message.failure)
                .then(clearInput)


        })
    }
    sendForm(form);
    sendForm(formBottom);

}
module.exports = form;
},{}],3:[function(require,module,exports){
function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = 'auto';
    })
}
module.exports = modal;
},{}],4:[function(require,module,exports){
function slider() {
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
        } else if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => {
            item.style.display = 'none'
        });
        dots.forEach(item => {
            item.classList.remove('dot-active')
        });
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    })
    next.addEventListener('click', function () {
        plusSlides(1);
    });
    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }

        }
    });
}
module.exports = slider;
},{}],5:[function(require,module,exports){
function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }

            }
        }
    });
}
module.exports = tabs;
},{}],6:[function(require,module,exports){
function timer() {
    let deadline = '2020-02-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total': t,
            'hours': (hours < 10) ? ("0" + hours) : hours,
            'minutes': (minutes < 10) ? ("0" + minutes) : minutes,
            'seconds': (seconds < 10) ? ("0" + seconds) : seconds
        }
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
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }
    setClock('timer', deadline)

}
module.exports = timer;
},{}],7:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    let tabs = require('./parts/tabs.js');
    let timer = require('./parts/timer.js');
    let modal = require('./parts/modal.js');
    let form = require('./parts/form.js');
    let slider = require('./parts/slider.js');
    let calc = require('./parts/calc.js');

    tabs();
    timer();
    modal();
    form();
    slider();
    calc();

})

},{"./parts/calc.js":1,"./parts/form.js":2,"./parts/modal.js":3,"./parts/slider.js":4,"./parts/tabs.js":5,"./parts/timer.js":6}]},{},[7]);

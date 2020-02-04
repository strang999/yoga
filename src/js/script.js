// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');


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

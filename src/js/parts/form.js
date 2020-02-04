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
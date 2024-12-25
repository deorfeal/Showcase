$(function () {

    $(document).ready(function () {
        $('.faq__item').on('click', function () {
            // Check if the clicked item is already active
            if ($(this).hasClass('faq__item--active')) {
                // Remove the --active class if it is already active
                $(this).removeClass('faq__item--active');
            } else {
                // Remove the --active class from all items
                $('.faq__item').removeClass('faq__item--active');
                // Add the --active class to the clicked item
                $(this).addClass('faq__item--active');
            }
        });
    });

    $('.burger').on('click', function (event) {
        $('body').toggleClass('body--active');
    });

    $('.menu__list-link').on('click', function (event) {
        $('body').removeClass('body--active');
    });

    // Делаем попап и скрываем по клику вне его
    //   $(document).ready(function () {
    //     var $popupSignin = $('.transfer');
    //     var $popupSigninInner = $popupSignin.find('.transfer__inner');
    //     // Показываем или скрываем popup при клике на кнопке
    //     $('.exchange-form__button').click(function (event) {
    //         event.stopPropagation(); // Остановка всплытия события
    //         $popupSignin.addClass('transfer--active');
    //         $popupSignin.fadeIn(250, function () {
    //             // После показа попапа, делаем анимацию изменения opacity от 0 до 1
    //             $(this).animate({
    //                 opacity: 1
    //             }, 250);
    //         });
    //         $('body').addClass('body--popup');
    //     });
    //     // Скрываем popup при клике вне его области (если попап активен)
    //     $(document).click(function (event) {
    //         console.log('srm')
    //         if ($popupSignin.hasClass('transfer--active')) {
    //             if (!($popupSigninInner.is(event.target) || $popupSigninInner.has(event.target).length > 0)) {
    //                 $popupSignin.fadeOut(250);
    //                 $('body').removeClass('body--popup');
    //             }
    //         }
    //     });
    // });

    // Копировать значение с инпута
    // if (document.querySelector('.transfer-body__wallet-copy')) {
    //     document.querySelector('.transfer-body__wallet-copy').addEventListener('click', function () {
    //         // Находим элемент <input> по его id
    //         var inputElement = document.querySelector('.transfer-body__wallet-input');

    //         // Вызываем метод select() для выбора текста внутри элемента <input>
    //         inputElement.select();

    //         // Выполняем команду копирования выбранного текста в буфер обмена
    //         document.execCommand('copy');

    //         // Снимаем фокус с элемента, чтобы выделение текста не оставалось
    //         inputElement.blur();

    //         // Подсветка кнопки для обратной связи
    //         this.classList.add('copied');

    //         // Через какое-то время убираем подсветку кнопки
    //         setTimeout(function () {
    //             document.querySelector('.transfer-body__wallet-copy').classList.remove('copied');
    //         }, 500);
    //     });
    // }
})

// Функция обратного вызова для Intersection Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('teacher--animate');
            observer.unobserve(entry.target); // Останавливаем наблюдение после добавления класса
        }
    });
}

// Настройка Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Область просмотра - это окно браузера
    rootMargin: '0px',
    threshold: 0.1 // Срабатывает, когда хотя бы 10% элемента появляется в области просмотра
});

// Наблюдение за всеми элементами с классом "teacher"
document.querySelectorAll('.teacher').forEach(teacher => {
    observer.observe(teacher);
});

// 

document.addEventListener('DOMContentLoaded', function () {
    const duration = 1500; // Длительность анимации в миллисекундах

    // Получаем все элементы с классом score-item__digit
    const targets = document.querySelectorAll('.score-item__digit');

    // Создаем Observer
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Начинаем счетчик для каждого элемента
                const target = entry.target;
                const endValue = parseFloat(target.getAttribute('data-value'));
                startCounter(target, endValue, duration);
                observer.unobserve(target);
            }
        });
    });

    // Наблюдаем за каждым элементом
    targets.forEach(target => observer.observe(target));

    function startCounter(element, endValue, duration) {
        let startValue = 0;
        let startTime = null;

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            let progress = currentTime - startTime;
            let currentValue = Math.min(endValue, startValue + (progress / duration) * (endValue - startValue));
            element.textContent = currentValue.toFixed(1).replace('.', ',');

            if (currentValue < endValue) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = endValue.toFixed(1).replace('.', ',');
            }
        }

        requestAnimationFrame(updateCounter);
    }
});

// 

$(function () {
    // Делаем попап и скрываем по клику вне его
    $(document).ready(function () {
        var $popupSuccess = $('.popup--success');
        var $popupSuccessInner = $popupSuccess.find('.popup__inner');

        // Показываем или скрываем popup при клике на кнопке
        $('.show-popup').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.stopPropagation(); // Остановка всплытия события
            $popupSuccess.addClass('popup--active');
            $popupSuccess.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        $('.close').click(function (event) {
            $('.popup').fadeOut(250);
            $('body').removeClass('body--popup');
        });
        $(document).click(function (event) {
            if ($popupSuccess.hasClass('popup--active')) {
                if (!($popupSuccessInner.is(event.target) || $popupSuccessInner.has(event.target).length > 0)) {
                    $popupSuccess.fadeOut(250);
                    $popupSuccess.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });
    });
});

// $(document).ready(function () {
//     if (document.querySelector('.counter')) {
//         $('.counter').counterUp({
//             delay: 10,
//             time: 1000
//         });
//     }
// });

// Делаем высоту слайдов одинаковой
// function setMaxHeightForProjects() {
//     setTimeout(() => {
//         let heights = [];

//         // Получаем высоту каждого элемента и добавляем в массив
//         document.querySelectorAll('.projects-swiper__slide').forEach(function (slide) {
//             heights.push(slide.getBoundingClientRect().height);
//         });

//         let maxHeight = Math.max(...heights);

//         // Устанавливаем высоту каждого элемента в самую большую высоту
//         document.querySelectorAll('.projects-swiper__slide').forEach(function (slide) {
//             slide.style.minHeight = maxHeight + 'px';
//         });
//     }, 200)
// }

// $(function () {
//     // Получаем нужный элемент
//     if (document.querySelector('.projects')) {
//         var element = document.querySelector('.projects');

//         var newsVisible = function (target) {
//             // let headerBottom = document.querySelectorAll('.header-bottom')[0]
//             // var menuBtn = document.querySelectorAll('.menu-btn')[0]
//             // var footerTop = document.querySelectorAll('.footer-top')[0]
//             // Все позиции элемента
//             var targetPosition = {
//                     top: window.pageYOffset + target.getBoundingClientRect().top,
//                     left: window.pageXOffset + target.getBoundingClientRect().left,
//                     right: window.pageXOffset + target.getBoundingClientRect().right,
//                     bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//                 },
//                 // Получаем позиции окна
//                 windowPosition = {
//                     top: window.pageYOffset,
//                     left: window.pageXOffset,
//                     right: window.pageXOffset + document.documentElement.clientWidth,
//                     bottom: window.pageYOffset + document.documentElement.clientHeight
//                 };

//             if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//                 targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//                 targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//                 targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//                 // Если элемент полностью видно, то запускаем следующий код
//                 setTimeout(() => {
//                     setMaxHeightForProjects()
//                 }, 1000)
//             } else {};
//         };

//         // Запускаем функцию при прокрутке страницы
//         window.addEventListener('scroll', function () {
//             newsVisible(element);
//         });

//         // А также запустим функцию сразу. А то вдруг, элемент изначально видно
//         newsVisible(element);
//     }
// })
//

new Swiper('.stories-swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 750,
    spaceBetween: 30,
    navigation: {
        prevEl: '.arrow--prev',
        nextEl: '.arrow--next',
    },
    // pagination: {
    //     el: '.recalls-swiper__pagination',
    //     type: 'bullets',
    // },
    // autoplay: {
    //     delay: 5000, // задержка между слайдами в миллисекундах
    //     disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
    // },
    // breakpoints: {
    //     301: {
    //         slidesPerView: 2.2,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
    //     501: {
    //         slidesPerView: 2.5,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
    // }
});


new Swiper('.articles-swiper', {
    slidesPerView: 3,
    loop: false,
    enabled: false,
    speed: 750,
    spaceBetween: 40,
    grid: {
        rows: 2,
    },
    navigation: {
        prevEl: '.arrow--prev',
        nextEl: '.arrow--next',
    },
    // pagination: {
    //     el: '.recalls-swiper__pagination',
    //     type: 'bullets',
    // },
    // autoplay: {
    //     delay: 5000, // задержка между слайдами в миллисекундах
    //     disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
    // },
    breakpoints: {
        301: {
            slidesPerView: 1,
            loop: true,
            enabled: true,
            speed: 750,
            spaceBetween: 40,
            grid: {
                rows: 3,
            },
        },
        801: {
            slidesPerView: 2,
            loop: true,
            enabled: true,
            speed: 750,
            spaceBetween: 40,
            grid: {
                rows: 2,
            },
        },
        1001: {
            slidesPerView: 3,
            loop: false,
            enabled: false,
            speed: 750,
            spaceBetween: 40,
            grid: {
                rows: 2,
            },
        },
    }
});

new Swiper('.recalls-swiper', {
    slidesPerView: 1.5,
    loop: true,
    speed: 750,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 0,
    navigation: {
        prevEl: '.recalls--prev',
        nextEl: '.recalls--next',
    },
    // pagination: {
    //     el: '.recalls-swiper__pagination',
    //     type: 'bullets',
    // },
    // autoplay: {
    //     delay: 5000, // задержка между слайдами в миллисекундах
    //     disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
    // },
    breakpoints: {
        301: {
            slidesPerView: 1,
            loop: true,
            speed: 750,
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 0,
        },
        1001: {
            slidesPerView: 1.5,
            loop: true,
            speed: 750,
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 0,
        },
    }
});

// Aos - the right initialisation
jQuery(document).ready(function () {
    (function () {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 750,
            offset: 0, // offset (in px) from the original trigger point
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});
// //

// timer
// setInterval(() => {
//     let timeNow = new Date() // Время сейчас
//     let timeNowTimeStamp = timeNow.getTime() // сколько прошоло с 1970 до теперешнего момената
//     // console.log(timeNowTimeStamp)

//     let ourDate = new Date('2023-03-19T23:14:00') // Время нашего знакомства
//     let ourDateTimeStamp = ourDate.getTime() // сколько прошоло с 1970 до теперешнего момената
//     // console.log(ourDateTimeStamp)

//     let timeStampMilliseconds = ourDateTimeStamp - timeNowTimeStamp // Миллисекунды ( разница между временем теперь и временем нашей встречи )

//     let secondsOfTimeStamp = timeStampMilliseconds / 1000 // Секунды - разницы
//     let minutesOfTimeStamp = secondsOfTimeStamp / 60 // минуты - разницы
//     let hoursOfTimeStamp = minutesOfTimeStamp / 60 // часы - разницы
//     let daysOfTimeStamp = hoursOfTimeStamp / 24 // Дни - разницы

//     let secondsOfTimeStampFloor = Math.floor(timeStampMilliseconds / 1000) // Секунды - разницы
//     let minutesOfTimeStampFloor = Math.floor(secondsOfTimeStamp / 60) // минуты - разницы
//     let secondsRamnant = secondsOfTimeStampFloor - (minutesOfTimeStampFloor * 60) // Остаток секунд - то есть наши секунды в Html
//     let hoursOfTimeStampFloor = Math.floor(minutesOfTimeStamp / 60) // часы - разницы
//     let minutesRamnant = minutesOfTimeStampFloor - (hoursOfTimeStampFloor * 60) // Остаток минут - то есть наши минуты в Html
//     let daysOfTimeStampFloor = Math.floor(hoursOfTimeStamp / 24) // Дни - разницы
//     let hoursRamnant = hoursOfTimeStampFloor - (daysOfTimeStampFloor * 24) // Остаток часов - то есть наши часы в Html

//     let hours = document.querySelector('.header-bottom-body-row__item-text--hours')

//     let minutes = document.querySelector('.header-bottom-body-row__item-text--minutes')

//     let seconds = document.querySelector('.header-bottom-body-row__item-text--seconds')

//     // // //

//     seconds.innerHTML = secondsRamnant

//     if (hoursRamnant < 10) {
//         console.log(String(hoursRamnant)[0])
//         hours.innerHTML = '0' + String(hoursRamnant) + '<span>:</span>'
//     } else {
//         hours.innerHTML = String(hoursRamnant) + '<span>:</span>'
//     }

//     if (minutesRamnant < 10) {
//         minutes.innerHTML = '0' + String(minutesRamnant) + '<span>:</span>'
//     } else {
//         minutes.innerHTML = String(minutesRamnant) + '<span>:</span>'
//     }

//     if (secondsRamnant < 10) {
//         seconds.innerHTML = '0' + String(secondsRamnant)
//     } else {
//         seconds.innerHTML = String(secondsRamnant)
//     }
// }, 1000)
// //

// typed js

// $(".typed").typed({
//     strings: ["Графічним дизайнерам", "Початковим веб-дизайнерам", "Студентам/школярам", "Офісним працівникам"],
//     // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
//     stringsElement: null,
//     // typing speed
//     typeSpeed: 30,
//     // time before typing starts
//     startDelay: 1200,
//     // backspacing speed
//     backSpeed: 20,
//     // time before backspacing
//     backDelay: 500,
//     // loop
//     loop: true,
//     // false = infinite
//     loopCount: 5,
//     // show cursor
//     showCursor: false,
//     // character for cursor
//     cursorChar: "|",
//     // attribute to type (null == text)
//     attr: null,
//     // either html or text
//     contentType: 'html',
//     // call when done callback function
//     callback: function () {},
//     // starting callback function before each string
//     preStringTyped: function () {},
//     //callback for every typed string
//     onStringTyped: function () {},
//     // callback for reset
//     resetCallback: function () {}
// });
// //

// Phone mask

// window.addEventListener("DOMContentLoaded", function () {
//     [].forEach.call(document.querySelectorAll('.tel'), function (input) {
//         var keyCode;

//         function mask(event) {
//             event.keyCode && (keyCode = event.keyCode);
//             var pos = this.selectionStart;
//             if (pos < 3) event.preventDefault();
//             var matrix = "+7 (___) ___-____",
//                 i = 0,
//                 def = matrix.replace(/\D/g, ""),
//                 val = this.value.replace(/\D/g, ""),
//                 new_value = matrix.replace(/[_\d]/g, function (a) {
//                     return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//                 });
//             i = new_value.indexOf("_");
//             if (i != -1) {
//                 i < 5 && (i = 3);
//                 new_value = new_value.slice(0, i)
//             }
//             var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//                 function (a) {
//                     return "\\d{1," + a.length + "}"
//                 }).replace(/[+()]/g, "\\$&");
//             reg = new RegExp("^" + reg + "$");
//             if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//             if (event.type == "blur" && this.value.length < 5) this.value = ""
//         }

//         input.addEventListener("input", mask, false);
//         input.addEventListener("focus", mask, false);
//         input.addEventListener("blur", mask, false);
//         input.addEventListener("keydown", mask, false)

//     });

// });

// //

// Visibilyto of element on scroll or not
// $(function () {
//     // Получаем нужный элемент
//     var element = document.querySelector('footer');

//     var Visible = function (target) {
//         // let headerBottom = document.querySelectorAll('.header-bottom')[0]
//         // var menuBtn = document.querySelectorAll('.menu-btn')[0]
//         // var footerTop = document.querySelectorAll('.footer-top')[0]
//         // Все позиции элемента
//         var targetPosition = {
//                 top: window.pageYOffset + target.getBoundingClientRect().top,
//                 left: window.pageXOffset + target.getBoundingClientRect().left,
//                 right: window.pageXOffset + target.getBoundingClientRect().right,
//                 bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//             },
//             // Получаем позиции окна
//             windowPosition = {
//                 top: window.pageYOffset,
//                 left: window.pageXOffset,
//                 right: window.pageXOffset + document.documentElement.clientWidth,
//                 bottom: window.pageYOffset + document.documentElement.clientHeight
//             };

//         if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//             targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//             targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//             targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//             // Если элемент полностью видно, то запускаем следующий код
//             $('.connection__bottom-btn').addClass('connection__bottom-btn--none')
//             $('.connection').addClass('connection-margin')

//         } else {
//             $('.connection__bottom-btn').removeClass('connection__bottom-btn--none')
//             $('.connection').removeClass('connection-margin')
//         };
//     };

//     // Запускаем функцию при прокрутке страницы
//     window.addEventListener('scroll', function () {
//         Visible(element);
//     });

//     // А также запустим функцию сразу. А то вдруг, элемент изначально видно
//     Visible(element);
// })
// // 
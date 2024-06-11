$(function () {

    $(document).ready(function () {
        // Обработчик события для кнопки plus
        $(".count__button--plus").on("click", function () {
            // Находим родительский элемент
            var parent = $(this).closest(".count");

            // Находим инпут внутри родителя
            var input = parent.find(".count__digit-input");

            // Получаем текущее значение и увеличиваем на 1
            var currentValue = parseInt(input.val());
            input.val(currentValue + 1);
        });

        // Обработчик события для кнопки minus
        $(".count__button--minus").on("click", function () {
            // Находим родительский элемент
            var parent = $(this).closest(".count");

            // Находим инпут внутри родителя
            var input = parent.find(".count__digit-input");

            // Получаем текущее значение
            var currentValue = parseInt(input.val());

            // Уменьшаем значение, но не даем уйти меньше 1
            if (currentValue > 1) {
                input.val(currentValue - 1);
            }
        });

    });

    // Удаляем элемент basket-form-item
    $(".basket-form-item__button").on("click", function () {
        // Находим родительский элемент
        var parent = $(this).closest(".basket-form-item");
        parent.addClass('basket-form-item--disabled')
    });

    $('.basket-form-item__button').on('click', function () {
        // Проверяем, есть ли хотя бы один элемент без класса 'basket-form-item--disabled'
        if ($('.basket-form-item').not('.basket-form-item--disabled').length === 0) {
            // Если все элементы имеют класс 'basket-form-item--disabled', добавляем класс 'basket--empty' к элементу с классом 'basket'
            $('.basket').addClass('basket--empty');
        }
    });

    $('.burger').on('click', function (event) {
        $('body').toggleClass('body--active')
    });

    // ==

    // $('.menu-list__link').on('click', function (event) {
    //     $('body').toggleClass('body--active')
    // });

    // Функция для проверки на мобильные устройства
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Если устройство мобильное, то используем событие клика
    if (isMobileDevice()) {

        $('.menu-list__item').on('click', function (event) {
            if ($(this).hasClass('menu-list__item--active')) {
                $(this).removeClass('menu-list__item--active')
            } else {
                $('.menu-list__item--active').removeClass('menu-list__item--active')
                $(this).addClass('menu-list__item--active')
            }
        });

    } else {
        // Иначе используем событие ховера

        $('.menu-list__item').mouseover(
            function () {
                $(this).addClass('menu-list__item--active');
            },
        );

        $('.menu-list__item').mouseout(
            function () {
                $(this).removeClass('menu-list__item--active');
            }
        );
    }

    $('.menu-list__item').click(function() {
        var offsetTop = $(this).offset().top; // Получаем расстояние от верха страницы до элемента
        $('html, body').animate({
            scrollTop: offsetTop - 50
        }, 0); // Прокручиваем страницу до элемента за 1000 миллисекунд (1 секунда)
    });
    
    // ==

    $('.filters-form-item-top').on('click', function (event) {
        // Находим родителя с классом 'filters-form-item' и убираем у него класс 'filters-form-item--active'
        $(this).closest('.filters-form-item').toggleClass('filters-form-item--active');
    });

    $('.tags__list-item').on('click', function (event) {
        $(this).addClass('tags__list-item--disabled')
    });

    $('.product-packaging-form__box-radio').on('click', function (event) {
        $('.product-packaging-form__box').removeClass('product-packaging-form__box--active');
        for (let item of $('.product-packaging-form__box-radio')) {
            item.checked = false
        }
        $(this)[0].checked = true
        $(this).closest('.product-packaging-form__box').addClass('product-packaging-form__box--active');
    });

    $('.colors__box-radio').on('click', function (event) {
        var colorsParent = $(this).closest(".colors");
        var parent = $(this).closest(".colors__box");

        // Исправление: исправлен селектор на '.colors__box'
        colorsParent.find('.colors__box').removeClass('colors__box--active');

        for (let item of $('.colors__box-radio')) {
            item.checked = false;
        }

        $(this)[0].checked = true;
        parent.addClass('colors__box--active');
    });

    $('.filters-top').on('click', function (event) {
        $('body').toggleClass('body--filters')
    });

    $('.user-nav-list__item--basket').on('click', function (event) {
        $('body').toggleClass('body--basket')
        $('body').removeClass('body--entrance')
    });

    $('.basket__close').on('click', function (event) {
        $('body').removeClass('body--basket')
    });

    $('.user-nav-list__item--entrance').on('click', function (event) {
        $('body').toggleClass('body--entrance')
        $('body').removeClass('body--basket')
    });

    $('.entrance__close').on('click', function (event) {
        $('body').removeClass('body--entrance')
    });

    $('.data__text-link').on('click', function (event) {
        $('body').addClass('popup--delete-account')
    });

    $('.popup__buttons-button--cancel').on('click', function (event) {
        $('body').removeClass('popup--delete-account')
    });

    $('.popup__close').on('click', function (event) {
        $('body').removeClass('popup--delete-account')
        $('body').removeClass('body--choose-address')
    });

    $('.profile-aside-list__item--active').on('click', function (event) {
        $('body').toggleClass('body--profile-menu')
    });

    $('.entrance__tubs-button').on('click', function (event) {
        $('.entrance__wrapper--active').removeClass('entrance__wrapper--active')
        $('.entrance__tubs-button--active').removeClass('entrance__tubs-button--active')
        $(this).addClass('entrance__tubs-button--active')
        for (let item of $('.entrance__wrapper')) {
            if (item.id == $(this)[0].id) {
                item.classList.add('entrance__wrapper--active')
            }
        }
    });

    $('.order-tubs__button').on('click', function (event) {
        $('.order-tubs__button--active').removeClass('order-tubs__button--active')
        $(this).addClass('order-tubs__button--active')
    });

    $('.orders-tubs__button').on('click', function (event) {
        $('.orders-tubs__button--active').removeClass('orders-tubs__button--active')
        $(this).addClass('orders-tubs__button--active')
        if ($(this)[0].id == 0) {
            $('.orders-item').removeClass('orders-item--disabled')
        } else if ($(this)[0].id == 1) {
            $('.orders-item').addClass('orders-item--disabled')
            $('.orders-item--current').removeClass('orders-item--disabled')
        } else if ($(this)[0].id == 2) {
            $('.orders-item').addClass('orders-item--disabled')
            $('.orders-item--completed').removeClass('orders-item--disabled')
        }
    });

    $('.delvr-item-top').on('click', function (event) {
        $(this).closest(".delvr-item").addClass('delvr-item--active');
    });

    $('.choose-address__input').on('click', function (event) {
        $(this).closest(".choose-address").addClass('choose-address--active');
    });

    $('.choose-address__list-item').on('click', function (event) {
        var selectedText = $(this).text().trim(); // Получаем текст без лишних отступов
        $(this).closest(".delvr-info__text").html(selectedText);
        $('.choose-address').removeClass('choose-address--active');
        $(this).closest(".choose-address__input").val(selectedText);
        $(this).closest(".delvr-item").addClass('delvr-item--activated');
        $('.choose-address').addClass('choose-address--act');
    });

    $('.delvr-item__btn-button').on('click', function (event) {
        $('body').removeClass('body--choose-address')
    });

    $('.order-payment-form__box').on('click', function (event) {
        $('.order-payment-form__box--active').removeClass('order-payment-form__box--active')
        $(this).addClass('order-payment-form__box--active')
        $('.order-payment-form__box-radio')[0].checked = false
    });

    $('.order__button--first').on('click', function (event) {
        $('.order').addClass('order--second')
    });

    $('.order__button--second').on('click', function (event) {
        $('.order').removeClass('order--second')
        $('.order').addClass('order--third')
    });

    $('.address-form__button').on('click', function (event) {
        $('body').toggleClass('body--choose-address')
    });

    // if (document.querySelector('.heading')) {
    //     // Проверка на мобильное устройство
    //     function isMobileDevice() {
    //         return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    //     }

    //     // Пример использования
    //     if (isMobileDevice()) {
    //         function setHeadingHeight() {
    //             var headerHeight = document.querySelector('.header').offsetHeight;
    //             var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    //             // Устанавливаем высоту heading только если высота экрана меньше или равна 700 пикселям
    //             if (windowHeight <= 1000) {
    //                 document.querySelector('.heading').style.height = `calc(100vh - ${headerHeight}rem)`;
    //                 $('body').addClass('body--mobile')
    //             } else {
    //                 // Если высота экрана больше 700 пикселей, сбросим высоту heading
    //                 document.querySelector('.heading').style.height = 'auto';
    //                 $('body').remove('body--mobile')
    //             }
    //         }

    //         // Вызовите функцию при загрузке страницы
    //         window.addEventListener('load', setHeadingHeight);

    //         // Вызовите функцию при изменении ширины окна
    //         window.addEventListener('resize', setHeadingHeight);
    //     } else {
    //         console.log("Сайт просматривается не с мобильного устройства");
    //     }
    // } else {

    // }
})

new Swiper('.heading-swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 750,
    pagination: {
        el: '.heading-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
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

new Swiper('.product-swiper', {
    slidesPerView: 2,
    loop: false,
    enabled: false,
    speed: 750,
    spaceBetween: 20,
    pagination: {
        el: '.product-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            loop: true,
            enabled: true,
            speed: 750,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            loop: false,
            enabled: false,
            speed: 750,
            spaceBetween: 20,
        },
    }
});

new Swiper('.care-swiper', {
    slidesPerView: 2,
    loop: true,
    speed: 750,
    spaceBetween: 10,
    pagination: {
        el: '.care-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
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

new Swiper('.offers-swiper', {
    slidesPerView: 5,
    loop: true,
    speed: 750,
    spaceBetween: 10,
    navigation: {
        prevEl: '.offers-swiper__prev',
        nextEl: '.offers-swiper__next',
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        301: {
            slidesPerView: 2,
            loop: false,
            enabled: false,
            speed: 750,
            spaceBetween: 10,
        },
        551: {
            slidesPerView: 3,
            loop: true,
            speed: 750,
            spaceBetween: 10,
        },
        1201: {
            slidesPerView: 4,
            loop: true,
            speed: 750,
            spaceBetween: 10,
        },
        1401: {
            slidesPerView: 5,
            loop: true,
            speed: 750,
            spaceBetween: 10,
        },
    }
});

new Swiper('.packaging-swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 750,
    spaceBetween: 15,
    pagination: {
        el: '.packaging-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    // breakpoints: {
    //     301: {
    //         slidesPerView: 2,
    //         loop: false,
    //         enabled: false,
    //         speed: 750,
    //         spaceBetween: 10,
    //     },
    //     551: {
    //         slidesPerView: 3,
    //         loop: true,
    //         speed: 750,
    //         spaceBetween: 10,
    //     },
    //     1201: {
    //         slidesPerView: 4,
    //         loop: true,
    //         speed: 750,
    //         spaceBetween: 10,
    //     },
    //     1401: {
    //         slidesPerView: 5,
    //         loop: true,
    //         speed: 750,
    //         spaceBetween: 10,
    //     },
    // }
});



// Aos - the right initialisation
// jQuery(document).ready(function () {
//     (function () {
//         // your page initialization code here
//         // the DOM will be available here
//         AOS.init({
//             duration: 1000,
//             offset: 0, // offset (in px) from the original trigger point
//             anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
//         });
//     })();
// });
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


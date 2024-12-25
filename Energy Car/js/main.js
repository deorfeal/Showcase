$(function () {

    // profile 
    $('.profile-list__item').click(function () {
        $('.profile-list__item--active').removeClass('profile-list__item--active');
        $(this).addClass('profile-list__item--active');
        $('.profile-item--active').removeClass('profile-item--active');
        for (let item of $('.profile-item')) {
            if (item.id == $(this)[0].id) {
                $(item).addClass('profile-item--active')
            }
        }
    });

    $('.data-form__change').click(function () {
        $('.data-form__box--password').removeClass('data-form__box--disabled');
    });
    // profile

    // filters
    $('.filter__name').click(function () {
        // Toggle the 'filter__name--active' class on the clicked element
        $(this).toggleClass('filter__name--active');

        // Toggle the 'element--hidden' class on the next sibling element
        $(this).next().toggleClass('element--hidden');
    });

    // 

    $('.catalog__filter-btn').click(function () {
        $('.catalog-aside').toggleClass('catalog-aside--active');
    });


    // Делаем попап и скрываем по клику вне его
    $(document).ready(function () {
        var $popupContact = $('.popup--contact');
        var $popupContactInner = $popupContact.find('.popup__inner');

        var $popupOrder = $('.popup--order');
        var $popupOrderInner = $popupOrder.find('.popup__inner');

        var $popupSuccess = $('.popup--success');
        var $popupSuccessInner = $popupSuccess.find('.popup__inner');

        var $popupBasket = $('.popup--basket');
        var $popupBasketInner = $popupBasket.find('.popup__inner');


        // Показываем или скрываем popup при клике на кнопке
        $('.heading-swiper__link').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $popupContact.addClass('popup--active');
            $popupContact.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        $('.card__details').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $popupOrder.addClass('popup--active');
            $popupOrder.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        $('.card .links a').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
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


        $('.card__order').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $popupBasket.addClass('popup--active');
            $popupBasket.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        $('.cls').click(function (event) {
            $('.popup').fadeOut(250);
            $('body').removeClass('body--popup');
        });

        // Скрываем popup при клике вне его области (если попап активен)
        $(document).click(function (event) {
            if ($popupContact.hasClass('popup--active')) {
                if (!($popupContactInner.is(event.target) || $popupContactInner.has(event.target).length > 0)) {
                    $popupContact.fadeOut(250);
                    $popupContact.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });
        $(document).click(function (event) {
            if ($popupOrder.hasClass('popup--active')) {
                if (!($popupOrderInner.is(event.target) || $popupOrderInner.has(event.target).length > 0)) {
                    $popupOrder.fadeOut(250);
                    $popupOrder.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
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
        $(document).click(function (event) {
            if ($popupBasket.hasClass('popup--active')) {
                if (!($popupBasketInner.is(event.target) || $popupBasketInner.has(event.target).length > 0)) {
                    $popupBasket.fadeOut(250);
                    $popupBasket.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

    });
});

$(function () {

    if (1) {
        const sections = document.querySelectorAll(".element");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                const link = document.querySelector(`aside a[href="#${id}"]`);

                if (entry.isIntersecting) {
                    link.classList.add("aside-item--active");
                } else {
                    link.classList.remove("aside-item--active");
                }
            });
        }, {
            threshold: 0.6 // 60% видимости элемента
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    $('.article aside h4').on('click', function (event) {
        $('.article aside').toggleClass('aside--active');
    });

    $('.btn--data').on('click', function (event) {
        $('.basket').addClass('basket--data');
    });

    $('.btn--basket').on('click', function (event) {
        $('.basket').removeClass('basket--data');
    });

    $('.burger').on('click', function (event) {
        $('body').toggleClass('body-menu--active');
    });

    $('.faq-list__item').on('click', function (event) {
        // Закрываем все активные элементы
        $('.faq-list__item--active').not(this).removeClass('faq-list__item--active');

        // Переключаем состояние элемента, на который кликнули
        $(this).toggleClass('faq-list__item--active');
    });

    $('.information-heading').on('click', function (event) {
        // Переключаем состояние элемента, на который кликнули
        $(this).closest('.information-item').toggleClass('information-item--active');
    });

    $('.collection-list__item').on('click', function (event) {
        // Переключаем состояние элемента, на который кликнули
        $('.collection-list__item--active').removeClass('collection-list__item--active');
        $(this).addClass('collection-list__item--active');

        $('.collection').addClass('collection--active')

        $('.collection-item--active').removeClass('collection-item--active');

        for (let item of $('.collection-item')) {
            if (item.id == $(this)[0].id) {
                $(item).addClass('collection-item--active');
            }
        }
    });



    if (document.querySelector('.review__inner')) {
        document.querySelectorAll('.review__inner').forEach(review => {
            const video = review.querySelector('video');

            review.addEventListener('mouseenter', () => {
                video.play();
            });

            review.addEventListener('mouseleave', () => {
                video.pause();
                // video.currentTime = 0;
            });
        });
    }

    window.addEventListener('scroll', function () {
        if (document.querySelector('.header')) {
            var header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.classList.add('header--sticky');
            } else {
                header.classList.remove('header--sticky');
            }
        }
    });

    if ($('.ctl').length) {
        // Function to add active class
        function addActiveClass(element) {
            $(element).addClass('ctl--active');
            $('body').addClass('body--ctl');
        }

        // Function to remove active class
        function removeActiveClass(element) {
            $(element).removeClass('ctl--active');
            $('body').removeClass('body--ctl');
        }

        // Detect if the device is touch-enabled or screen width is less than 1100px
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = window.innerWidth < 1100;

        if (isTouchDevice || isSmallScreen) {
            // Mobile device or small screen: Use click event
            $('.ctl__button').on('click', function (event) {
                event.stopPropagation();
                const element = $(this).closest('.ctl');
                addActiveClass(element);
            });
        } else {
            // Desktop device with large screen: Use mouseover and mouseout events
            $('.ctl').on('mouseover', function () {
                addActiveClass(this);
            }).on('mouseout', function () {
                removeActiveClass(this);
            });
        }
    }


    $('.collection__button').on('click', function (event) {
        $('body').removeClass('body--ctl')
    });

    $('.collection-item__button').on('click', function (event) {
        $('.collection-item--active').removeClass('collection-item--active')
        $('.collection--active').removeClass('collection--active')
        $('.collection-list__item--active').removeClass('collection-list__item--active')
    });


    $('.search-form__input').on('focus', function (event) {
        $('body').addClass('search--active')
    });

    $('.search-form__input').on('blur', function (event) {
        $('body').removeClass('search--active')
    });

    // $('.header-top-lang').on('click', function (event) {
    //     $('.header-top-lang-content').toggleClass('header-top-lang-content--active');
    //     $(this).toggleClass('header-top-lang--active');
    // });

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

document.addEventListener('DOMContentLoaded', () => {
    // Функция для обработки клика на элемент color-item
    function handleColorItemClick(event) {
        const clickedItem = event.currentTarget;
        const parentColorInner = clickedItem.closest('.color__inner');
        const parentColorWrapper = clickedItem.closest('.color').querySelector('.color__wrapper');
        const clickedItemId = clickedItem.id;

        // Убираем класс color-item--active у всех элементов в родительской области color__inner
        parentColorInner.querySelectorAll('.color-item').forEach(item => {
            item.classList.remove('color-item--active');
        });

        // Добавляем класс color-item--active к кликнутому элементу
        clickedItem.classList.add('color-item--active');

        // Убираем класс color__subtext--active у всех элементов в родительской области color__wrapper
        parentColorWrapper.querySelectorAll('.color__subtext').forEach(subtext => {
            subtext.classList.remove('color__subtext--active');
        });

        // Добавляем класс color__subtext--active элементу с соответствующим id
        parentColorWrapper.querySelector(`.color__subtext[id="${clickedItemId}"]`).classList.add('color__subtext--active');
    }

    // Добавляем обработчик клика ко всем элементам с классом color-item
    document.querySelectorAll('.color-item').forEach(item => {
        item.addEventListener('click', handleColorItemClick);
    });
});


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);

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

new Swiper('.heading-swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 750,
    navigation: {
        prevEl: '.arrow--prev',
        nextEl: '.arrow--next',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
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

new Swiper('.cards-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    speed: 750,
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
            slidesPerView: 1.25,
            loop: true,
            spaceBetween: 15,
            speed: 750,
        },
        651: {
            slidesPerView: 1.6,
            loop: true,
            spaceBetween: 15,
            speed: 750,
        },
        768: {
            slidesPerView: 1.8,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        901: {
            slidesPerView: 2.1,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        1001: {
            slidesPerView: 2.25,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        1151: {
            slidesPerView: 2.5,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        1301: {
            slidesPerView: 2.75,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        1551: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
    }
});

new Swiper('.recalls-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    speed: 750,
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
            slidesPerView: 1.25,
            loop: true,
            spaceBetween: 15,
            speed: 750,
        },
        651: {
            slidesPerView: 1.6,
            loop: true,
            spaceBetween: 15,
            speed: 750,
        },
        768: {
            slidesPerView: 1.8,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        901: {
            slidesPerView: 2.1,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        1001: {
            slidesPerView: 2.25,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        1151: {
            slidesPerView: 2.5,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        1301: {
            slidesPerView: 2.75,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        1551: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
    }
});

var productThumbs = new Swiper(".product-thumbs", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    loop: true,
    watchSlidesProgress: true,
});

new Swiper(".product-preview", {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productThumbs,
    },
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
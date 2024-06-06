// Aos - the right initialisation
jQuery(document).ready(function () {
    (function () {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 1000,
            offset: 50, // offset (in px) from the original trigger point
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});

if (document.querySelector('.road__inner')) {
    document.addEventListener('scroll', function () {
        // Получаем элемент с классом road__inner
        var roadInner = document.querySelector('.road__inner');

        // Получаем расположение верхней части road__inner относительно верхней части экрана
        var rect = roadInner.getBoundingClientRect();

        // Проверяем, если верхняя часть road__inner касается верхней части экрана
        if (rect.top <= 0) {
            // Добавляем класс road__inner--active
            roadInner.classList.add('road__inner--active');
        } else {
            // Убираем класс road__inner--active, если элемент не виден
            roadInner.classList.remove('road__inner--active');
        }
    });

    // Функция для добавления класса aos-animate при видимости элемента
    function handleScroll() {
        var roadInner = document.querySelector('.road__inner');
        var roadItems = document.querySelectorAll('.road-item');

        roadItems.forEach(function (item) {
            var rect = item.getBoundingClientRect();
            var isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);

            if (isVisible) {
                item.classList.add('aos-animate');
            }
        });
    }

    // Навешивание обработчика события прокрутки на элемент road__inner
    var roadInner = document.querySelector('.road__inner');
    roadInner.addEventListener('scroll', handleScroll);

    // Вызов функции handleScroll при загрузке страницы (для начальной проверки видимости элементов)
    handleScroll();
}


$(function () {

    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var offsetTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (offsetTop > $('.header').outerHeight(true)) {
            $('body').addClass('header--sticky');
        } else {
            $('body').removeClass('header--sticky');
        }

        // Проверка на скроллинг вверх
        if (offsetTop < lastScrollTop) {
            // Скроллинг вверх, выполните соответствующие действия
            $('body').removeClass('header--sticky');
        }

        lastScrollTop = offsetTop;
    });


    // =+=

    // Делаем попап и скрываем по клику вне его
    $(document).ready(function () {
        var $popup = $('.popup');
        var $popupMessage = $('.popup--message');
        var $popupMessageInner = $popupMessage.find('.popup__inner');

        // Показываем или скрываем popup при клике на кнопке
        $('a').click(function (event) {

            // Получаем атрибут href ссылки
            var href = $(this).attr("href");

            // Проверяем, равен ли href "no_popup"
            if (href === "#no_popup") {
                event.preventDefault();
                event.stopPropagation(); // Остановка всплытия события
                $popupMessage.addClass('popup--active');
                $popupMessage.fadeIn(250, function () {
                    // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                    $(this).animate({
                        opacity: 1
                    }, 250);
                });
                $('body').addClass('body--popup');
            }
        });

        $('.popup__close').click(function (event) {
            event.stopPropagation(); // Остановка всплытия события
            $popup.removeClass('popup--active');
            $popup.fadeOut(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').removeClass('body--popup');
        });

        // Скрываем popup при клике вне его области (если попап активен)
        $(document).click(function (event) {
            if ($popupMessage.hasClass('popup--active')) {
                if (!($popupMessageInner.is(event.target) || $popupMessageInner.has(event.target).length > 0)) {
                    $popupMessage.fadeOut(250);
                    $('body').removeClass('body--popup');
                }
            }
        });
    });

    // 

    // === +

    // $('.lng__current').on('click', function (event) {
    //     $('.lng').toggleClass('lng--active');
    // });

    // === +

    $('.cards-list__text--question').on('mouseover', function (event) {
        $(this).closest('.cards-list__text').addClass('cards-list__text--active')
    });

    $('.cards-list__text--question').on('mouseout', function (event) {
        $(this).closest('.cards-list__text').removeClass('cards-list__text--active')
    });

    $('.cards-list__text--question').on('click', function (event) {
        $(this).closest('.cards-list__text').toggleClass('cards-list__text--active')
    });

    $('.burger').on('click', function (event) {
        $('body').toggleClass('body--active');
    });

    $('.faq-list__item').on('click', function (event) {
        if ($(this).hasClass('faq-list__item--active')) {
            $(this).removeClass('faq-list__item--active');
        } else {
            $('.faq-list__item--active').removeClass('faq-list__item--active');
            $(this).addClass('faq-list__item--active');
        }
    });

    $('.rates-titling__link').on('click', function (event) {
        // $(this).addClass('btn--loading');
        // $(this).addClass('btn--error');
    });

    // === +

    // $('.lng').on('click', function (event) {
    //     if (document.querySelector('.header--sticky')) {
    //         $('.burger').trigger("click")
    //         setTimeout(() => {
    //             $('.lngs').find('.fas').trigger("click")
    //         }, 200)
    //     }
    // });

    // === +

    $('.services-list__item').on('click', function (event) {
        $('body').addClass('contact--active')
    });

    $('.contact__close').on('click', function (event) {
        $('body').removeClass('contact--active')
    });


    // // // // // //
    $('.order-line__close').on('click', function (event) {
        $('body').removeClass('fast-order--active')
    });

    $('.contact-form__button').on('click', function (event) {
        if ($(this).closest('.contact-form')) {
            $('.fast-order').addClass('fast-order--payment')
        }
    });

    $('.payment__button').on('click', function (event) {
        if (document.querySelector('.payment-item--active')) {
            $('.fast-order').addClass('fast-order--end-order')
        }
    });

    $('.end-order__buttons-button--close').on('click', function (event) {
        $('.fast-order').removeClass('fast-order--end-order')
        $('.fast-order').removeClass('fast-order--payment')
        $('body').removeClass('fast-order--active')
    });
    $('.payment-item__radio').on('click', function (event) {
        // Снимаем флажок с других элементов
        $('.payment-item__radio').prop('checked', false);

        // Выставляем флажок только для текущего элемента
        $(this).prop('checked', true);

        // Добавляем класс родителю текущего элемента
        $(this).closest('.payment-item').addClass('payment-item--active');

        // Удаляем класс у родителей других элементов
        $('.payment-item__radio').not(this).closest('.payment-item').removeClass('payment-item--active');
    });
    // // // // // //

    // === +

    $(function () {
        // Функция для проверки на мобильные устройства
        function isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Если устройство мобильное, то используем событие клика
        if (isMobileDevice()) {

            $(document).on('click', function (event) {
                // Проверяем, является ли цель клика элементом с классом '.menu-list__item--categories'
                if (!$(event.target).closest('.menu-list__item--categories').length) {
                    // Если нет, убираем класс 'menu-list__item--active' у всех элементов с этим классом
                    $('.menu-list__item--categories').removeClass('menu-list__item--active');
                }

                // Проверяем, является ли цель клика элементом с классом '.menu-list__item--categories'
                if (!$(event.target).closest('.lng').length) {
                    // Если нет, убираем класс 'menu-list__item--active' у всех элементов с этим классом
                    $('.lng').removeClass('lng--active');
                }
            });

            $('.menu-list__item--categories').on('click', function () {
                $(this).addClass('menu-list__item--active');
            });

            $('.phone').on('click', function () {
                $(this).addClass('phone--active');
            });

            $('.lng').on('click', function () {
                $(this).toggleClass('lng--active');
            });

        } else { // Иначе используем событие ховера
            $('.menu-list__item--categories').mouseover(
                function () {
                    $(this).addClass('menu-list__item--active');
                },

            );

            $('.menu-list__item--categories').mouseout(
                function () {
                    $(this).removeClass('menu-list__item--active');
                }
            );

            $('.phone').mouseover(
                function () {
                    $(this).addClass('phone--active');
                },
            );

            $('.phone').mouseout(
                function () {
                    $(this).removeClass('phone--active');
                }
            );

            $('.lng').mouseover(
                function () {
                    $(this).addClass('lng--active');
                },
            );

            $('.lng').mouseout(
                function () {
                    $(this).removeClass('lng--active');
                }
            );
        }
    })

    $('.menu-list-sublist__btn-text').on('mouseover', function (event) {
        for (let item of $('.menu-list-sublist__item')) {
            item.classList.remove('menu-list-sublist__item--active')
        }
        for (let item of $('.menu-list-sublist__list')) {
            item.classList.remove('menu-list-sublist__list--active')
        }
        for (let item of $('.menu-list-sublist__list')) {
            if (item.id == $(this)[0].id) {
                item.classList.add('menu-list-sublist__list--active')
            }
        }
        $(this)[0].parentNode.parentNode.classList.add('menu-list-sublist__item--active')
    });

    // === +
})

function setMaxHeightForNews() {
    setTimeout(() => {
        let heights = [];

        // Получаем высоту каждого элемента и добавляем в массив
        document.querySelectorAll('.news-swiper__slide').forEach(function (slide) {
            heights.push(slide.getBoundingClientRect().height);
        });

        let maxHeight = Math.max(...heights);

        // Устанавливаем высоту каждого элемента в самую большую высоту
        document.querySelectorAll('.news-swiper__slide').forEach(function (slide) {
            slide.style.minHeight = maxHeight + 'px';
        });
    }, 200)
}

function setMaxHeightForRecalls() {
    setTimeout(() => {
        let heights = [];

        // Получаем высоту каждого элемента и добавляем в массив
        document.querySelectorAll('.recalls-swiper__slide').forEach(function (slide) {
            heights.push(slide.getBoundingClientRect().height);
        });

        let maxHeight = Math.max(...heights);

        // Устанавливаем высоту каждого элемента в самую большую высоту
        document.querySelectorAll('.recalls-swiper__slide').forEach(function (slide) {
            slide.style.minHeight = maxHeight + 'px';
        });
    }, 200)
}

function setMaxHeightForPlans() {
    setTimeout(() => {
        let heights = [];

        // Получаем высоту каждого элемента и добавляем в массив
        document.querySelectorAll('.plans-swiper__slide').forEach(function (slide) {
            heights.push(slide.getBoundingClientRect().height);
        });

        let maxHeight = Math.max(...heights);

        // Устанавливаем высоту каждого элемента в самую большую высоту
        document.querySelectorAll('.plans-swiper__slide').forEach(function (slide) {
            slide.style.minHeight = maxHeight + 'px';
        });
    }, 200)
}

document.addEventListener('DOMContentLoaded', function () {
    // Собираем все элементы <picture>
    var pictureElements = document.querySelectorAll('picture');

    // Перебираем каждый <picture>
    pictureElements.forEach(function (picture) {
        // Находим <img> внутри каждого <picture>
        var imgElement = picture.querySelector('img');

        // Добавляем обработчик события загрузки для <img>
        imgElement.onload = function () {
            // При загрузке изображения добавляем атрибут и класс к родительскому <picture>
            picture.setAttribute('data-loaded', 'true');
            picture.classList.add('loaded');
        };

        // Если изображение уже загружено (кэшировано), сразу вызываем обработчик события
        if (imgElement.complete) {
            imgElement.onload();
        }
    });
});

var newsSwiper = new Swiper('.news-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 15,
    speed: 750,
    navigation: {
        prevEl: '.news-swiper__prev',
        nextEl: '.news-swiper__next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1.2,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        451: {
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        701: {
            slidesPerView: 2.5,
            loop: true,
            spaceBetween: 15,
            speed: 750,
        },
        901: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 15,
            speed: 750,
        },
    }
});

var recallsSwiper = new Swiper('.recalls-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    speed: 750,
    navigation: {
        prevEl: '.recalls-swiper__prev',
        nextEl: '.recalls-swiper__next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        501: {
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        751: {
            slidesPerView: 2.5,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        1051: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
    }
});

new Swiper('.partners-swiper', {
    slidesPerView: 8,
    loop: true,
    spaceBetween: 30,
    speed: 750,
    breakpoints: {
        301: {
            slidesPerView: 2,
            grid: {
                rows: 3,
            },
            loop: false,
            spaceBetween: 10,
        },
        501: {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 20,
            speed: 750,
        },
        851: {
            slidesPerView: 5,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        1251: {
            slidesPerView: 8,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
    }
});

new Swiper('.heading-view', {
    slidesPerView: 1,
    loop: true,
    speed: 750,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});


new Swiper('.plans-swiper', {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 30,
    enabled: false,
    // speed: 750,
    navigation: {
        prevEl: '.plans-swiper__prev',
        nextEl: '.plans-swiper__next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1.12,
            loop: false,
            spaceBetween: 15,
            enabled: true,
            speed: 750,
        },
        401: {
            slidesPerView: 1.3,
            loop: false,
            spaceBetween: 15,
            enabled: true,
            speed: 750,
        },
        501: {
            slidesPerView: 1.5,
            loop: false,
            spaceBetween: 15,
            enabled: true,
            speed: 750,
        },
        601: {
            slidesPerView: 1.8,
            loop: false,
            spaceBetween: 15,
            enabled: true,
            speed: 750,
        },
        801: {
            slidesPerView: 2.2,
            loop: false,
            spaceBetween: 15,
            enabled: true,
            speed: 750,
        },
        1001: {
            slidesPerView: 2.5,
            loop: false,
            spaceBetween: 30,
            enabled: true,
            speed: 750,
        },
        1301: {
            slidesPerView: 3,
            loop: false,
            spaceBetween: 30,
            enabled: false,
        },
    }
});

new Swiper('.app-swiper', {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 0,
    enabled: false,
    navigation: {
        prevEl: '.app-slide__prev',
        nextEl: '.app-slide__next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1.2,
            loop: false,
            spaceBetween: 20,
            enabled: true,
            speed: 750,
        },
        381: {
            slidesPerView: 1.8,
            loop: false,
            spaceBetween: 20,
            enabled: true,
            speed: 750,
        },
        551: {
            slidesPerView: 2.5,
            loop: false,
            spaceBetween: 20,
            enabled: true,
            speed: 750,
        },
        851: {
            slidesPerView: 3,
            loop: false,
            spaceBetween: 25,
            enabled: true,
            speed: 750,
        },
        1001: {
            slidesPerView: 3,
            loop: false,
            spaceBetween: 0,
            enabled: false,
        },
    }
});

new Swiper('.advantages-swiper', {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 30,
    enabled: false,
    breakpoints: {
        301: {
            slidesPerView: 1.1,
            loop: false,
            spaceBetween: 10,
            enabled: true,
        },
        401: {
            slidesPerView: 1.4,
            loop: false,
            spaceBetween: 10,
            enabled: true,
        },
        501: {
            slidesPerView: 1.8,
            loop: false,
            spaceBetween: 10,
            enabled: true,
        },
        601: {
            slidesPerView: 2.2,
            loop: false,
            spaceBetween: 15,
            enabled: true,
        },
        751: {
            slidesPerView: 2.5,
            loop: false,
            spaceBetween: 20,
            enabled: true,
        },
        951: {
            slidesPerView: 3,
            loop: false,
            spaceBetween: 30,
            enabled: false,
        },
    }
});

// ==== //

new Swiper('.chargings-swiper', {
    slidesPerView: 3.8,
    loop: true,
    spaceBetween: 30,
    navigation: {
        prevEl: '.chargings-swiper__prev',
        nextEl: '.chargings-swiper__next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1.3,
            loop: true,
            spaceBetween: 15,
        },
        551: {
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 15,
        },
        851: {
            slidesPerView: 2.2,
            loop: true,
            spaceBetween: 15,
        },
        951: {
            slidesPerView: 2.5,
            loop: true,
            spaceBetween: 15,
        },
        1301: {
            slidesPerView: 3.8,
            loop: true,
            spaceBetween: 30,
        },
    }
});

function setMaxHeightForChargings() {
    setTimeout(() => {
        let heights = [];

        // Получаем высоту каждого элемента и добавляем в массив
        document.querySelectorAll('.chargings-slide').forEach(function (slide) {
            heights.push(slide.getBoundingClientRect().height);
        });

        let maxHeight = Math.max(...heights);

        // Устанавливаем высоту каждого элемента в самую большую высоту
        document.querySelectorAll('.chargings-slide').forEach(function (slide) {
            slide.style.minHeight = maxHeight + 'px';
        });
    }, 200)
}

$(function () {
    if (document.querySelector('.chargings-swiper ')) {
        // Получаем нужный элемент
        var element = document.querySelector('.chargings-swiper ');

        var VisibleRecalls = function (target) {
            // let headerBottom = document.querySelectorAll('.header-bottom')[0]
            // var menuBtn = document.querySelectorAll('.menu-btn')[0]
            // var footerTop = document.querySelectorAll('.footer-top')[0]
            // Все позиции элемента
            var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
                // Получаем позиции окна
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
                // Если элемент полностью видно, то запускаем следующий код
                setTimeout(() => {
                    setMaxHeightForChargings()
                }, 1000)
            } else { };
        };

        // Запускаем функцию при прокрутке страницы
        window.addEventListener('scroll', function () {
            VisibleRecalls(element);
        });

        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
        VisibleRecalls(element);
    }
})

// ==== //

// Visibilyto of element on scroll or not
$(function () {
    // Получаем нужный элемент
    if (document.querySelector('.news-swiper')) {
        var element = document.querySelector('.news-swiper');

        var newsVisible = function (target) {
            // let headerBottom = document.querySelectorAll('.header-bottom')[0]
            // var menuBtn = document.querySelectorAll('.menu-btn')[0]
            // var footerTop = document.querySelectorAll('.footer-top')[0]
            // Все позиции элемента
            var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
                // Получаем позиции окна
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
                // Если элемент полностью видно, то запускаем следующий код
                setTimeout(() => {
                    setMaxHeightForNews()
                }, 1000)
            } else { };
        };

        // Запускаем функцию при прокрутке страницы
        window.addEventListener('scroll', function () {
            newsVisible(element);
        });

        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
        newsVisible(element);
    }
})
$(function () {
    // Получаем нужный элемент
    if (document.querySelector('.recalls-swiper')) {
        var element = document.querySelector('.recalls-swiper');

        var VisibleRecalls = function (target) {
            // let headerBottom = document.querySelectorAll('.header-bottom')[0]
            // var menuBtn = document.querySelectorAll('.menu-btn')[0]
            // var footerTop = document.querySelectorAll('.footer-top')[0]
            // Все позиции элемента
            var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
                // Получаем позиции окна
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
                // Если элемент полностью видно, то запускаем следующий код
                setTimeout(() => {
                    setMaxHeightForRecalls()
                }, 1000)
            } else { };
        };

        // Запускаем функцию при прокрутке страницы
        window.addEventListener('scroll', function () {
            VisibleRecalls(element);
        });

        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
        VisibleRecalls(element);
    }
})
$(function () {
    if (document.querySelector('.plans-swiper')) {
        // Получаем нужный элемент
        var element = document.querySelector('.plans-swiper');

        var VisibleRecalls = function (target) {
            // let headerBottom = document.querySelectorAll('.header-bottom')[0]
            // var menuBtn = document.querySelectorAll('.menu-btn')[0]
            // var footerTop = document.querySelectorAll('.footer-top')[0]
            // Все позиции элемента
            var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
                // Получаем позиции окна
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
                // Если элемент полностью видно, то запускаем следующий код
                setTimeout(() => {
                    setMaxHeightForPlans()
                }, 1000)
            } else { };
        };

        // Запускаем функцию при прокрутке страницы
        window.addEventListener('scroll', function () {
            VisibleRecalls(element);
        });

        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
        VisibleRecalls(element);
    }
})

function setMaxHeightForAdvantages() {
    setTimeout(() => {
        let heights = [];

        // Получаем высоту каждого элемента и добавляем в массив
        document.querySelectorAll('.advantages-slide').forEach(function (slide) {
            heights.push(slide.getBoundingClientRect().height);
        });

        let maxHeight = Math.max(...heights);

        // Устанавливаем высоту каждого элемента в самую большую высоту
        document.querySelectorAll('.advantages-slide').forEach(function (slide) {
            slide.style.minHeight = maxHeight + 'px';
        });
    }, 200)
}

$(function () {
    if (document.querySelector('.advantages-swiper')) {
        // Получаем нужный элемент
        var element = document.querySelector('.advantages-swiper');

        var VisibleRecalls = function (target) {
            // let headerBottom = document.querySelectorAll('.header-bottom')[0]
            // var menuBtn = document.querySelectorAll('.menu-btn')[0]
            // var footerTop = document.querySelectorAll('.footer-top')[0]
            // Все позиции элемента
            var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
                // Получаем позиции окна
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
                // Если элемент полностью видно, то запускаем следующий код
                setTimeout(() => {
                    setMaxHeightForAdvantages()
                }, 1000)
            } else { };
        };

        // Запускаем функцию при прокрутке страницы
        window.addEventListener('scroll', function () {
            VisibleRecalls(element);
        });

        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
        VisibleRecalls(element);
    }
})

// 

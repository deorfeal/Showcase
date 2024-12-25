document.querySelectorAll('.faq-list__item').forEach(item => {
    item.addEventListener('click', () => {
        // Если элемент уже активен, убрать активный класс
        if (item.classList.contains('faq-list__item--active')) {
            item.classList.remove('faq-list__item--active');
        } else {
            // Убираем класс у всех элементов
            document.querySelectorAll('.faq-list__item').forEach(el => el.classList.remove('faq-list__item--active'));
            // Добавляем класс текущему элементу
            item.classList.add('faq-list__item--active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('.video__view');

    videos.forEach(function (video) {
        video.play().catch(function (error) {
            console.log('Автовоспроизведение заблокировано. Пользовательское взаимодействие необходимо: ', error);
        });
    });
});

$(function () {

    document.querySelectorAll('.contact-radios__radio-input').forEach(input => {
        input.addEventListener('click', function () {
            const parentRadios = this.closest('.contact-radios'); // находим родителя

            // Убираем класс у всех элементов внутри одного родителя
            parentRadios.querySelectorAll('.contact-radios__radio').forEach(radio => {
                radio.classList.remove('contact-radios__radio--active');
            });
            parentRadios.querySelectorAll('.contact-radios__radio-input').forEach(input => {
                input.classList.remove('contact-radios__radio-input--active');
                input.checked = false;
            });

            // Добавляем активные классы текущему радио и инпуту
            this.classList.add('contact-radios__radio-input--active');
            this.checked = true;
            this.closest('.contact-radios__radio').classList.add('contact-radios__radio--active');

            // Ищем элемент с таким же id в блоке contact-form
            const contactForm = $(this).closest('.contact-form')[0];
            const relatedItemId = this.id;
            contactForm.querySelectorAll('.contact-item').forEach(item => {
                item.classList.remove('contact-item--active');
                if (item.id === relatedItemId) {
                    item.classList.add('contact-item--active');
                }
            });
        });
    });

    // Делаем попап и скрываем по клику вне его
    $(document).ready(function () {
        var $popup = $('.popup');
        var $popups = {
            call: $('.popup--call'),
            application: $('.popup--application'),
        };

        // Функция для показа попапа
        function showPopup($popupToShow) {
            $popupToShow.addClass('popup--active').fadeIn(250, function () {
                $(this).animate({ opacity: 1 }, 250);
            });
            $('body').addClass('body--popup');
        }

        // Функция для скрытия попапа
        function hidePopup($popupToHide) {
            $popupToHide.removeClass('popup--active').fadeOut(250, function () {
                $(this).animate({ opacity: 1 }, 250);
            });
            $('body').removeClass('body--popup');
        }

        // Обработчики кликов для показа попапов
        $('.heading-body__link').click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            showPopup($popups.application);
        });
        // Обработчики кликов для показа попапов
        $('.heading-body__file').click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            showPopup($popups.call);
        });

        // Обработчик кликов для скрытия попапов
        $('.cls').click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            hidePopup($popup);
        });

        // Скрываем попап при клике вне его области
        $(document).click(function (event) {
            $.each($popups, function (key, $popupToCheck) {
                if ($popupToCheck.hasClass('popup--active')) {
                    var $popupInner = $popupToCheck.find('.popup__inner');
                    if (!$popupInner.is(event.target) && $popupInner.has(event.target).length === 0) {
                        hidePopup($popupToCheck);
                    }
                }
            });
        });
    });
})

new Swiper('.description-swiper', {
    slidesPerView: 3.5,
    loop: true,
    spaceBetween: 30,
    speed: 750,
    navigation: {
        prevEl: '.description-arrow--prev',
        nextEl: '.description-arrow--next',
    },
    autoplay: {
        delay: 5000, // задержка между слайдами в миллисекундах
        disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
    },
    on: {
        slideChange: () => { //Здесь мы переключаем старый слайд на новый и нужно обновить прогресс-бар. Без таймаута стиль не обновляется.
            document.querySelector('.description .progress__bar').classList.remove('active');
            setTimeout(() => {
                document.querySelector('.description .progress__bar').classList.add('active');
            }, 50);
        },
    },
    breakpoints: {
        301: {
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 16,
            speed: 750,
        },
        769: {
            slidesPerView: 2.5,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        1251: {
            slidesPerView: 3.5,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
    }
});

new Swiper('.projects-swiper', {
    slidesPerView: 2.25,
    loop: true,
    spaceBetween: 30,
    speed: 750,
    navigation: {
        prevEl: '.projects-arrow--prev',
        nextEl: '.projects-arrow--next',
    },
});

var productThumbs = new Swiper(".thumbs-swiper", {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 25,
    direction: 'vertical',
    breakpoints: {
        301: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 16,
            direction: 'vertical',
        },
        992: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 25,
            direction: 'vertical',
        },
    }
});

new Swiper(".services-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    thumbs: {
        swiper: productThumbs,
    },
    autoplay: {
        delay: 5000, // задержка между слайдами в миллисекундах
        disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
    },
    on: {
        slideChange: () => { //Здесь мы переключаем старый слайд на новый и нужно обновить прогресс-бар. Без таймаута стиль не обновляется.
            document.querySelector('.services .progress__bar').classList.remove('active');
            setTimeout(() => {
                document.querySelector('.services .progress__bar').classList.add('active');
            }, 50);
        },
    },
});

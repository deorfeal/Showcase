jQuery(document).ready(function () {
    (function () {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 1000,
            offset: 0, // offset (in px) from the original trigger point
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});
setInterval(() => {
    let timeNow = new Date() // Время сейчас 
    let timeNowTimeStamp = timeNow.getTime() // сколько прошоло с 1970 до теперешнего момената 
    // console.log(timeNowTimeStamp)

    let ourDate = new Date('2023-03-19T23:14:00') // Время нашего знакомства 
    let ourDateTimeStamp = ourDate.getTime() // сколько прошоло с 1970 до теперешнего момената
    // console.log(ourDateTimeStamp)

    let timeStampMilliseconds = ourDateTimeStamp - timeNowTimeStamp // Миллисекунды ( разница между временем теперь и временем нашей встречи )

    let secondsOfTimeStamp = timeStampMilliseconds / 1000 // Секунды - разницы 
    let minutesOfTimeStamp = secondsOfTimeStamp / 60 // минуты - разницы 
    let hoursOfTimeStamp = minutesOfTimeStamp / 60 // часы - разницы 
    let daysOfTimeStamp = hoursOfTimeStamp / 24 // Дни - разницы 

    let secondsOfTimeStampFloor = Math.floor(timeStampMilliseconds / 1000) // Секунды - разницы 
    let minutesOfTimeStampFloor = Math.floor(secondsOfTimeStamp / 60) // минуты - разницы 
    let secondsRamnant = secondsOfTimeStampFloor - (minutesOfTimeStampFloor * 60) // Остаток секунд - то есть наши секунды в Html
    let hoursOfTimeStampFloor = Math.floor(minutesOfTimeStamp / 60) // часы - разницы 
    let minutesRamnant = minutesOfTimeStampFloor - (hoursOfTimeStampFloor * 60) // Остаток минут - то есть наши минуты в Html
    let daysOfTimeStampFloor = Math.floor(hoursOfTimeStamp / 24) // Дни - разницы 
    let hoursRamnant = hoursOfTimeStampFloor - (daysOfTimeStampFloor * 24) // Остаток часов - то есть наши часы в Html

    let hours = document.querySelector('.header-bottom-body-row__item-text--hours')

    let minutes = document.querySelector('.header-bottom-body-row__item-text--minutes')

    let seconds = document.querySelector('.header-bottom-body-row__item-text--seconds')

    // // //

    seconds.innerHTML = secondsRamnant

    if (hoursRamnant < 10) {
        console.log(String(hoursRamnant)[0])
        hours.innerHTML = '0' + String(hoursRamnant) + '<span>:</span>'
    } else {
        hours.innerHTML = String(hoursRamnant) + '<span>:</span>'
    }

    if (minutesRamnant < 10) {
        minutes.innerHTML = '0' + String(minutesRamnant) + '<span>:</span>'
    } else {
        minutes.innerHTML = String(minutesRamnant) + '<span>:</span>'
    }

    if (secondsRamnant < 10) {
        seconds.innerHTML = '0' + String(secondsRamnant)
    } else {
        seconds.innerHTML = String(secondsRamnant)
    }
}, 1000)


setTimeout(() => {
    $('.waititng').addClass('waititng--active')
    setInterval(() => {
        setTimeout(() => {           
            $('.waititng').removeClass('waititng--active')
        }, 1000)
        setTimeout(() => {           
            $('.waititng').addClass('waititng--active')
        }, 1500)
    }, 9000)
}, 0)

$(".typed").typed({
    strings: ["Графічним дизайнерам", "Початковим веб-дизайнерам", "Студентам/школярам", "Офісним працівникам"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {}
});

$(function () {

    // $('.header-top-lang').on('click', function (event) {
    //     $('.header-top-lang-content').toggleClass('header-top-lang-content--active');
    //     $(this).toggleClass('header-top-lang--active');
    // });


    $('.header-top__btn').on('click', function (event) {
        $('.header-mobile').addClass('header-mobile--active');
        $('.header').addClass('header--active');
        

    });

    $('.header-mobile-top__btn').on('click', function (event) {
        $('.header-mobile').removeClass('header-mobile--active');
        $('.header').removeClass('header--active');
    });

    $('.faq-item').on('click', function (event) {
        if ($(this)[0].classList.contains('faq-item--active')) {
            $('.faq-item').removeClass('faq-item--active');
        } else {
            $('.faq-item').removeClass('faq-item--active');
            $(this).addClass('faq-item--active')
        }
    });

    $('.faq__btn').on('click', function (event) {
        $('.faq__inner').toggleClass('faq__inner--active');
    });




})

// $(function () {
//     var mixer = mixitup('.draws-info__inner', {
//         load: {
//             filter: '.draw'
//         },
//         animation: {
//             enable: false
//         },
//     });
// })

// $(function () {
//     var containerEl1 = document.querySelector('[data-ref="container-1"]');
//     var containerEl2 = document.querySelector('[data-ref="container-2"]');

//     var config = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };
//     var confiG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-firstt',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };

//     var confiGG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         }
//     };

//     var mixer1 = mixitup(containerEl1, config);
//     var mixer1 = mixitup(containerEl2, confiG);

// })

new Swiper('.works-swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    initialSlide: 1,
    speed: 1000,
    navigation: {
        prevEl: '.works-swiper__prev',
        nextEl: '.works-swiper__next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            initialSlide: 0,
            centeredSlides: false,
        },
        801: {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            initialSlide: 1,
        },
    }
});

new Swiper('.recalls-swiper', {
    slidesPerView: 3.7,
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.recalls-swiper__prev',
        nextEl: '.recalls-swiper__next',
    },
    pagination: {
        el: '.recalls-swiper__pagination',
        type: 'bullets',
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        551: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1051: {
            slidesPerView: 3.7,
            spaceBetween: 20,
        },
    }
});
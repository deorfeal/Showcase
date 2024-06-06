$(function () {

    $('.faq-list__item').on('click', function (event) {
        if ($(this)[0].classList.contains('faq-list__item--active')) {
            $(this).removeClass('faq-list__item--active');
        } else {
            $(this).toggleClass('faq-list__item--active');
        }
    });


})

new Swiper('.languages-swiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '.languages-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    // breakpoints: {
    //     301: {
    //         slidesPerView: 2.2,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
});

new Swiper('.steps-swiper', {
    slidesPerView: 1,
    enabled: false,
    pagination: {
        el: '.steps-swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        301: {
            enabled: true,
            slidesPerView: 1,
        },
        951: {
            slidesPerView: 1,
            enabled: false,
        },
    }
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

    let secondsOfTimeStampFloor = Math.floor(timeStampMilliseconds / 1000)  // Секунды - разницы 
    let minutesOfTimeStampFloor = Math.floor(secondsOfTimeStamp / 60) // минуты - разницы 
    let secondsRamnant = secondsOfTimeStampFloor - (minutesOfTimeStampFloor * 60) // Остаток секунд - то есть наши секунды в Html
    let hoursOfTimeStampFloor = Math.floor(minutesOfTimeStamp / 60) // часы - разницы 
    let minutesRamnant = minutesOfTimeStampFloor - (hoursOfTimeStampFloor * 60) // Остаток минут - то есть наши минуты в Html
    let daysOfTimeStampFloor = Math.floor(hoursOfTimeStamp / 24) // Дни - разницы 
    let hoursRamnant = hoursOfTimeStampFloor - (daysOfTimeStampFloor * 24) // Остаток часов - то есть наши часы в Html

    let hours = document.querySelector('.soon-box-row-item__block-digit--hours-1')
    let hoursSecond = document.querySelector('.soon-box-row-item__block-digit--hours-2')

    let minutes = document.querySelector('.soon-box-row-item__block-digit--minutes-1')
    let minutesSecond = document.querySelector('.soon-box-row-item__block-digit--minutes-2')

    let seconds = document.querySelector('.soon-box-row-item__block-digit--seconds-1')
    let secondsSecond = document.querySelector('.soon-box-row-item__block-digit--seconds-2')

    // // //

    let hoursLast = document.querySelector('.soon-box-row-item__block-digit--hours-1--last')
    let hoursLastSecond = document.querySelector('.soon-box-row-item__block-digit--hours-2--last')

    let minutesLast = document.querySelector('.soon-box-row-item__block-digit--minutes-1--last')
    let minutesLastSecond = document.querySelector('.soon-box-row-item__block-digit--minutes-2--last')

    let secondsLast = document.querySelector('.soon-box-row-item__block-digit--seconds-1--last')
    let secondsLastSecond = document.querySelector('.soon-box-row-item__block-digit--seconds-2--last')
    
    seconds.innerHTML = secondsRamnant

    if ( hoursRamnant < 10 ) {
        hours.innerHTML = '0'
        hoursSecond.innerHTML = String(hoursRamnant)[0]

        hoursLast.innerHTML = '0'
        hoursLastSecond.innerHTML = String(hoursRamnant)[0]
    } else {
        hours.innerHTML = String(hoursRamnant)[0]
        hoursSecond.innerHTML = String(hoursRamnant)[1]

        hoursLast.innerHTML = String(hoursRamnant)[0]
        hoursLastSecond.innerHTML = String(hoursRamnant)[1]
    }

    if ( minutesRamnant < 10 ) {
        minutes.innerHTML = '0'
        minutesSecond.innerHTML = String(minutesRamnant)[0]

        minutesLast.innerHTML = '0'
        minutesLastSecond.innerHTML = String(minutesRamnant)[0]
    } else {
        minutes.innerHTML = String(minutesRamnant)[0]
        minutesSecond.innerHTML = String(minutesRamnant)[1]

        minutesLast.innerHTML = String(minutesRamnant)[0]
        minutesLastSecond.innerHTML = String(minutesRamnant)[1]
    }

    if ( secondsRamnant < 10 ) {
        seconds.innerHTML = '0'
        secondsSecond.innerHTML = String(secondsRamnant)[0]

        secondsLast.innerHTML = '0'
        secondsLastSecond.innerHTML = String(secondsRamnant)[0]
    } else {
        seconds.innerHTML = String(secondsRamnant)[0]
        secondsSecond.innerHTML = String(secondsRamnant)[1]

        secondsLast.innerHTML = String(secondsRamnant)[0]
        secondsLastSecond.innerHTML = String(secondsRamnant)[1]
    }

}, 1000)


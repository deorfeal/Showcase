let reservesList = [
    '8.631343',
    '83.138742',
    '789.338177',
    '341.98165',
    '769.47',
    '9471',
    '1058.99',
    '28081',
    '278159',
    '2000',
    '219411',
    '597.12',
    '354.8613',
    '190.6741',
    '3671.47',
    '589.12',
    '28641',
    '17123',
    '321.9481',
    '198.38912',
    '7490',
    '3907731.93',
    '518001.23',
];

let shortCoinName = [
    'BTC',
    'ETH',
    'BNB',
    'BNB',
    'LTC',
    'XRP',
    'DASH',
    'ADA',
    'DOGE',
    'DOT',
    'TRX',
    'XTZ',
    'AVAX',
    'ZEC',
    'MATIC',
    'SOL',
    'USDT',
    'USDT',
    'TON',
    'TWT',
    'USD',
    'KZT',
    'RUB',
];

let recallInfo = {
    userName: '',
    userMessage: ''
}

let mounthList = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

let countOfRecallsItems = 0

$('.recalls-form__input').on('input', function (event) {
    recallInfo.userName = this.value
});

$('.recalls-form__textarea').on('input', function (event) {
    recallInfo.userMessage = this.value
});

$('.recalls-form__btn').on('click', function (event) {
    event.preventDefault()

    countOfRecallsItems += 1

    let dateNow = new Date()

    $(document).ready(function () {
        $('.recalls-content').prepend(`
        <div class="recalls-content__item recalls-content-item">
        <p class="recalls-content-item__name">
            Андрей
        </p>
        <p class="recalls-content-item__text">
            Нужно срочно было вывести Piastrix USD на ЮМани, обменял за 2 минуты, сайт удобный и
            понятный, буду теперь регулярно пользоваться этим обменником!
        </p>
        <div class="recalls-content-item__box recalls-content-item-box">
                                    <p class="recalls-content-item-box__mounth">
                                        06
                                    </p>
                                    <p class="recalls-content-item-box__mounth recalls-content-item-box__mounth--mounth">
                                        Март
                                    </p>
                                    <p class="recalls-content-item-box__year">
                                        2023,
                                    </p>
                                    <p class="recalls-content-item-box__time">
                                        09:43
                                    </p>
            </div>
    </div>
    `);

        $('.recalls-content-item')[0].id = countOfRecallsItems
        if ($('.recalls-content-item__name')[0].parentNode.id == countOfRecallsItems) {
            $('.recalls-content-item__name')[0].textContent = recallInfo.userName
        }

        if ($('.recalls-content-item__text')[0].parentNode.id == countOfRecallsItems) {
            $('.recalls-content-item__text')[0].textContent = recallInfo.userMessage
        }

        if ($('.recalls-content-item-box__mounth')[0].parentNode.parentNode.id == countOfRecallsItems) {
            if (dateNow.getDate() < 9) {
                $('.recalls-content-item-box__mounth')[0].textContent = '0' + dateNow.getDate()
            } else {
                $('.recalls-content-item-box__mounth')[0].textContent = dateNow.getDate()
            }
        }
        if ($('.recalls-content-item-box__mounth--mounth')[0].parentNode.parentNode.id == countOfRecallsItems) {
            $('.recalls-content-item-box__mounth--mounth')[0].textContent = mounthList[dateNow.getMonth()]
        }
        if ($('.recalls-content-item-box__year')[0].parentNode.parentNode.id == countOfRecallsItems) {
            $('.recalls-content-item-box__year')[0].textContent = dateNow.getFullYear() + ','
        }
        if ($('.recalls-content-item-box__time')[0].parentNode.parentNode.id == countOfRecallsItems) {
            if (dateNow.getHours() < 9) {
                $('.recalls-content-item-box__time')[0].textContent = '0' + dateNow.getHours() + ':' + dateNow.getMinutes()
                if (dateNow.getMinutes() < 9) {
                    $('.recalls-content-item-box__time')[0].textContent = '0' + dateNow.getHours() + ':' + '0' + dateNow.getMinutes()
                }
            } else if (dateNow.getMinutes() < 9) {
                $('.recalls-content-item-box__time')[0].textContent = dateNow.getHours() + ':' + '0' + dateNow.getMinutes()
            } else {
                $('.recalls-content-item-box__time')[0].textContent = dateNow.getHours() + ':' + dateNow.getMinutes()
            }
        }

    });
});


$('.exchange-column-list__item').on('click', function (event) {
    console.log(shortCoinName[0])
    if (event.currentTarget.parentNode.parentNode.parentNode.id == 1) {
        let listItems = $('.exchange-column-list__item')
        for (let item of listItems) {
            if (item.parentNode.parentNode.parentNode.id == 1) {
                $(item).removeClass('exchange-column-list__item--active')
            }
            if (item.id == event.currentTarget.id) {
                if (item.parentNode.parentNode.parentNode.id == 1) {
                    $(item).addClass('exchange-column-list__item--active');
                }

                // Убираем во второй колонке такую же валюту 
                let allListofItems = $('.exchange-column-list__item')

                for (let oneOfAll of allListofItems) {
                    if (oneOfAll.parentNode.parentNode.parentNode.id == 2) {
                        if (oneOfAll.id == event.currentTarget.id) {
                            // $(oneOfAll).addClass('exchange-column-list__item--disabled');
                        }
                    }
                }
            }
        }

        // Проверка на картинку 
        if (event.currentTarget.id == 1 || event.currentTarget.id == 2 || event.currentTarget.id == 17 || event.currentTarget.id == 18 || event.currentTarget.id == 21 || event.currentTarget.id == 22 || event.currentTarget.id == 23) {
            let srcForElement = 'images/reserves-icon-'
            let srcForElementTwo = event.currentTarget.id
            let srcForElementThree = '.svg'
            let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree
            // Кнопки где отдаете получаете ( их иконки )
            let ourCryptiButton = $('.exchange-column-choose-top__box-img')
            for (let item of ourCryptiButton) {
                if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 1) {
                    console.log('ssgd')
                    $(item).attr('src', fullSrcForElement);
                }
            }
            // 

            // 
        } else {
            let srcForElement = 'images/reserves-icon-'
            let srcForElementTwo = event.currentTarget.id
            let srcForElementThree = '.png'
            let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

            // Кнопки где отдаете получаете ( их иконки )
            let ourCryptiButton = $('.exchange-column-choose-top__box-img')
            for (let item of ourCryptiButton) {
                if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 1) {
                    $(item).attr('src', fullSrcForElement);
                }
            }
            // 

        }
        // 

        // Добавляем валюту ( короткое название ) которую отдаем во все места где это нужно
        document.querySelector('.exchange-column-bottom__box-crypto').innerHTML = shortCoinName[+event.currentTarget.id - 1]
        document.querySelector('.exchange-column-bottom__text-short--first').innerHTML = shortCoinName[+event.currentTarget.id - 1]
        document.querySelector('.exchange-column-bottom__text--first').innerHTML = shortCoinName[+event.currentTarget.id - 1]
        // 

        // Добавляем текст в поле отдаете 

        document.querySelector('.exchange-column-choose-top__box-text--first').innerHTML = event.currentTarget.childNodes[1].childNodes[3].textContent.split(' ').join(' ')

        //
    }
    $('.exchange-column--first').removeClass('exchange-column--first--active')
});

$('.exchange-column-list__item').on('click', function (event) {
    if (event.currentTarget.parentNode.parentNode.parentNode.id == 2) {
        let listItems = $('.exchange-column-list__item')
        for (let item of listItems) {
            if (item.parentNode.parentNode.parentNode.id == 2) {
                $(item).removeClass('exchange-column-list__item--active')
            }
            if (item.id == event.currentTarget.id) {
                if (item.parentNode.parentNode.parentNode.id == 2) {
                    $(item).addClass('exchange-column-list__item--active');
                }
            }

            // Убираем в первой колонке такую же валюту 
            let allListofItems = $('.exchange-column-list__item')

            for (let oneOfAll of allListofItems) {
                if (oneOfAll.parentNode.parentNode.parentNode.id == 1) {
                    if (oneOfAll.id == event.currentTarget.id) {}
                }
            }
        }

        if (event.currentTarget.id == 1 || event.currentTarget.id == 2 || event.currentTarget.id == 17 || event.currentTarget.id == 18 || event.currentTarget.id == 21) {
            let srcForElement = 'images/reserves-icon-'
            let srcForElementTwo = event.currentTarget.id
            let srcForElementThree = '.svg'
            let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

            // Кнопки где отдаете получаете ( их иконки )
            let ourCryptiButton = $('.exchange-column-choose-top__box-img')
            for (let item of ourCryptiButton) {
                if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 2) {
                    $(item).attr('src', fullSrcForElement);
                }
            }
        } else if (event.currentTarget.id == 22 || event.currentTarget.id == 23) {
            let srcForElement = 'images/reserves-icon-'
            let srcForElementThree = '.svg'
            let fullSrcForElement = srcForElement + '21' + srcForElementThree

            // Кнопки где отдаете получаете ( их иконки )
            let ourCryptiButton = $('.exchange-column-choose-top__box-img')
            for (let item of ourCryptiButton) {
                if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 2) {
                    $(item).attr('src', fullSrcForElement);
                }
            }
            // 
        } else {
            let srcForElement = 'images/reserves-icon-'
            let srcForElementTwo = event.currentTarget.id
            let srcForElementThree = '.png'
            let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

            // Кнопки где отдаете получаете ( их иконки )
            let ourCryptiButton = $('.exchange-column-choose-top__box-img')
            for (let item of ourCryptiButton) {
                if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 2) {
                    $(item).attr('src', fullSrcForElement);
                }
            }
            // 
        }

        // Добавляем текст в поле получаете 

        document.querySelector('.exchange-column-choose-top__box-text--second').innerHTML = event.currentTarget.childNodes[1].childNodes[3].textContent.split(' ').join(' ')

        //

        // Добавляем валюту ( короткое название ) которую отдаем во все места где это нужно
        document.querySelector('.exchange-column-choose__text-short--second').innerHTML = shortCoinName[+event.currentTarget.id - 1]
        document.querySelector('.exchange-column-bottom__box-crypto--second').innerHTML = shortCoinName[+event.currentTarget.id - 1]
        document.querySelector('.exchange-column-bottom__text-short-reserve--second').innerHTML = shortCoinName[+event.currentTarget.id - 1]
        document.querySelector('.exchange-column-choose__text--reserve').innerHTML = reservesList[+event.currentTarget.id - 1]

        // 

    }

    // Делаем так что бы наши элементы не повторялись в блоках - что бы активные не повторялись в других 
    let listItems = $('.exchange-column-list__item')

    let firstActItm = []
    let secondActItm = []

    let ourFirstOfItmId = undefined
    let ourSecondOfItmId = undefined

    for (let item of listItems) {

        firstActItm.push(getIdesFirst())
        secondActItm.push(getIdesSecond())

        function getIdesFirst() {
            if (item.parentNode.parentNode.parentNode.id == 1) {
                if (item.classList.contains('exchange-column-list__item--active')) {
                    return item.id
                }
            }
        }

        function getIdesSecond() {
            if (item.parentNode.parentNode.parentNode.id == 2) {
                if (item.classList.contains('exchange-column-list__item--active')) {
                    return item.id
                }
            }
        }

        ourFirstOfItmId = getIdesFirstFromArr()
        ourSecondOfItmId = getIdesSecondFromArr()

        function getIdesFirstFromArr() {
            for (let itemOfFirstArr of firstActItm) {
                if (typeof (itemOfFirstArr) == typeof ('')) {
                    return itemOfFirstArr
                }
            }
        }

        function getIdesSecondFromArr() {
            for (let itemOfSecondArr of secondActItm) {
                if (typeof (itemOfSecondArr) == typeof ('')) {
                    return itemOfSecondArr
                }
            }
        }

    }
    for (let item of listItems) {
        // item - активный элемент с одной колонки и второй 
        if (item.parentNode.parentNode.parentNode.id == 1) {
            if (item.id == ourSecondOfItmId) {
                $(item).addClass('exchange-column-list__item--disabled')
            } else {
                $(item).removeClass('exchange-column-list__item--disabled')
            }
        }

        if (item.parentNode.parentNode.parentNode.id == 2) {
            if (item.id == ourFirstOfItmId) {
                $(item).addClass('exchange-column-list__item--disabled')
            } else {
                $(item).removeClass('exchange-column-list__item--disabled')
            }
        }
    }
    // 

    $('.exchange-column--second').removeClass('exchange-column--second--active')
});

$('.exchange-column-top__button').on('click', function (event) {
    let activeElementFromSecondColumn = $('.exchange-column-list__item--active')[1]
    if ($('.exchange-column-list__item--active')[1].parentNode.parentNode.parentNode.id == 2) {
        if ($('.exchange-column-list__item--active')[1].id == 21 || $('.exchange-column-list__item--active')[1].id == 22 || $('.exchange-column-list__item--active')[1].id == 23  ) {
          
        } else {
            if ($('.exchange-column-list__item--active')[0].parentNode.parentNode.parentNode.id == 1) {
                for (let item of $('.exchange-column-list__item')) {
        
                    if (item.parentNode.parentNode.parentNode.id == 2) {
                        $(item).removeClass('exchange-column-list__item--disabled')
                        $(item).removeClass('exchange-column-list__item--active')
                    }
        
                    if (item.parentNode.parentNode.parentNode.id == 2) {
        
                        if (item.id == $('.exchange-column-list__item--active')[0].id) {
                            $(item).addClass('exchange-column-list__item--active')
                        }
        
                    }
                }
                $('.exchange-column-choose-top__box-text--second')[0].textContent = $('.exchange-column-list__item--active')[1].textContent
                $('.exchange-column-choose__text-short--second')[0].textContent = shortCoinName[$('.exchange-column-list__item--active')[1].id - 1]
                $('.exchange-column-bottom__text-short-reserve--second')[0].textContent = shortCoinName[$('.exchange-column-list__item--active')[1].id - 1]
                $('.exchange-column-bottom__box-crypto--second')[0].textContent = shortCoinName[$('.exchange-column-list__item--active')[1].id - 1]
        
                if ($('.exchange-column-list__item--active')[1].id == 1 || $('.exchange-column-list__item--active')[1].id == 2 || $('.exchange-column-list__item--active')[1].id == 17 || $('.exchange-column-list__item--active')[1].id == 18 || $('.exchange-column-list__item--active')[1].id == 21) {
                    let srcForElement = 'images/reserves-icon-'
                    let srcForElementTwo = $('.exchange-column-list__item--active')[1].id
                    let srcForElementThree = '.svg'
                    let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree
        
                    // Кнопки где отдаете получаете ( их иконки )
                    let ourCryptiButton = $('.exchange-column-choose-top__box-img')
                    for (let item of ourCryptiButton) {
                        if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 2) {
                            $(item).attr('src', fullSrcForElement);
                        }
                    }
                } else if ($('.exchange-column-list__item--active')[1].id == 22 || $('.exchange-column-list__item--active')[1].id == 23) {
                    let srcForElement = 'images/reserves-icon-'
                    let srcForElementThree = '.svg'
                    let fullSrcForElement = srcForElement + '21' + srcForElementThree
        
                    // Кнопки где отдаете получаете ( их иконки )
                    let ourCryptiButton = $('.exchange-column-choose-top__box-img')
                    for (let item of ourCryptiButton) {
                        if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 2) {
                            $(item).attr('src', fullSrcForElement);
                        }
                    }
                    // 
                } else {
                    let srcForElement = 'images/reserves-icon-'
                    let srcForElementTwo = $('.exchange-column-list__item--active')[1].id
                    let srcForElementThree = '.png'
                    let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree
        
                    // Кнопки где отдаете получаете ( их иконки )
                    let ourCryptiButton = $('.exchange-column-choose-top__box-img')
                    for (let item of ourCryptiButton) {
                        if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 2) {
                            $(item).attr('src', fullSrcForElement);
                        }
                    }
                    // 
                }
            }
            if ($('.exchange-column-list__item--active')[1].parentNode.parentNode.parentNode.id == 2) {
                for (let item of $('.exchange-column-list__item')) {
        
                    if (item.parentNode.parentNode.parentNode.id == 1) {
                        $(item).removeClass('exchange-column-list__item--disabled')
                        $(item).removeClass('exchange-column-list__item--active')
                        console.log('smt')
                    }
        
                    if (item.parentNode.parentNode.parentNode.id == 1) {
                        if (item.id == activeElementFromSecondColumn.id) {
                            $(item).addClass('exchange-column-list__item--active')
                        }
                    }
                }
                $('.exchange-column-choose-top__box-text--first')[0].textContent = activeElementFromSecondColumn.textContent
                $('.exchange-column-bottom__text--first')[0].textContent = shortCoinName[activeElementFromSecondColumn.id - 1]
                $('.exchange-column-bottom__box-crypto')[0].textContent = shortCoinName[activeElementFromSecondColumn.id - 1]
                $('.exchange-column-bottom__text-short--first')[0].textContent = shortCoinName[activeElementFromSecondColumn.id - 1]
        
                // Проверка на картинку 
                if (activeElementFromSecondColumn.id == 1 || activeElementFromSecondColumn.id == 2 || activeElementFromSecondColumn.id == 17 || activeElementFromSecondColumn.id == 18 || activeElementFromSecondColumn.id == 21 || activeElementFromSecondColumn.id == 22 || activeElementFromSecondColumn.id == 23) {
                    let srcForElement = 'images/reserves-icon-'
                    let srcForElementTwo = activeElementFromSecondColumn.id
                    let srcForElementThree = '.svg'
                    let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree
                    // Кнопки где отдаете получаете ( их иконки )
                    let ourCryptiButton = $('.exchange-column-choose-top__box-img')
                    for (let item of ourCryptiButton) {
                        if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 1) {
                            console.log('ssgd')
                            $(item).attr('src', fullSrcForElement);
                        }
                    }
                    // 
        
                    // 
                } else {
                    let srcForElement = 'images/reserves-icon-'
                    let srcForElementTwo = activeElementFromSecondColumn.id
                    let srcForElementThree = '.png'
                    let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree
        
                    // Кнопки где отдаете получаете ( их иконки )
                    let ourCryptiButton = $('.exchange-column-choose-top__box-img')
                    for (let item of ourCryptiButton) {
                        if (item.parentNode.parentNode.parentNode.parentNode.parentNode.id == 1) {
                            $(item).attr('src', fullSrcForElement);
                        }
                    }
                    // 
        
                }
                // 
        
                // Делаем так что бы наши элементы не повторялись в блоках - что бы активные не повторялись в других 
                let listItems = $('.exchange-column-list__item')
        
                let firstActItm = []
                let secondActItm = []
        
                let ourFirstOfItmId = undefined
                let ourSecondOfItmId = undefined
        
                for (let item of listItems) {
        
                    firstActItm.push(getIdesFirst())
                    secondActItm.push(getIdesSecond())
        
                    function getIdesFirst() {
                        if (item.parentNode.parentNode.parentNode.id == 1) {
                            if (item.classList.contains('exchange-column-list__item--active')) {
                                return item.id
                            }
                        }
                    }
        
                    function getIdesSecond() {
                        if (item.parentNode.parentNode.parentNode.id == 2) {
                            if (item.classList.contains('exchange-column-list__item--active')) {
                                return item.id
                            }
                        }
                    }
        
                    ourFirstOfItmId = getIdesFirstFromArr()
                    ourSecondOfItmId = getIdesSecondFromArr()
        
                    function getIdesFirstFromArr() {
                        for (let itemOfFirstArr of firstActItm) {
                            if (typeof (itemOfFirstArr) == typeof ('')) {
                                return itemOfFirstArr
                            }
                        }
                    }
        
                    function getIdesSecondFromArr() {
                        for (let itemOfSecondArr of secondActItm) {
                            if (typeof (itemOfSecondArr) == typeof ('')) {
                                return itemOfSecondArr
                            }
                        }
                    }
        
                }
                for (let item of listItems) {
                    // item - активный элемент с одной колонки и второй 
                    if (item.parentNode.parentNode.parentNode.id == 1) {
                        if (item.id == ourSecondOfItmId) {
                            $(item).addClass('exchange-column-list__item--disabled')
                        } else {
                            $(item).removeClass('exchange-column-list__item--disabled')
                        }
                    }
        
                    if (item.parentNode.parentNode.parentNode.id == 2) {
                        if (item.id == ourFirstOfItmId) {
                            $(item).addClass('exchange-column-list__item--disabled')
                        } else {
                            $(item).removeClass('exchange-column-list__item--disabled')
                        }
                    }
                }
                // 
        
            }
        }
    }
});



$('.exchange-column-choose-top').on('click', function (event) {
    if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--first')) {
        if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--first--active')) {
            $('.exchange-column--first').removeClass('exchange-column--first--active')
        } else {
            $('.exchange-column--first').addClass('exchange-column--first--active')
        }
    }

    if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--second')) {
        if (this.parentNode.parentNode.parentNode.classList.contains('exchange-column--second--active')) {
            $('.exchange-column--second').removeClass('exchange-column--second--active')
        } else {
            $('.exchange-column--second').addClass('exchange-column--second--active')
        }
    }
});

$('.header-lang').on('click', function (event) {
    if (this.classList.contains('header-lang--active')) {
        $('.header-lang').removeClass('header-lang--active')
    } else {
        $('.header-lang').addClass('header-lang--active')
    }
});

$('.header__burger').on('click', function (event) {
    $('.body').toggleClass('body--menu')
});

$('.order-form-body-item-box__btn--first').on('click', function (event) {
    var copyText = document.getElementById("button1");

    copyText.select();

    document.execCommand("copy");
});

$('.order-form-body-item-box__btn--second').on('click', function (event) {
    var copyText = document.getElementById("button2");

    copyText.select();

    document.execCommand("copy");
});

if (document.querySelector('.body').classList.contains('body-order')) {
    // document.querySelector('.order-expectation__line--blue').style.width = '100%'
    let ourMinutes = 29
    let ourSeconds = 60
    setInterval(() => {
        ourSeconds--
        if (ourSeconds == 1) {
            ourMinutes--
            ourSeconds = 59
            $('.order-expectation__time--minutes').text(ourMinutes + ':' + ourSeconds)
        } else if (ourSeconds < 10) {
            $('.order-expectation__time--minutes').text(ourMinutes + ':' + '0' + ourSeconds)
        } else {
            $('.order-expectation__time--minutes').text(ourMinutes + ':' + ourSeconds)
        }
        
        // if (ourMinutes == 27) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '90%'
        // } else if (ourMinutes == 24) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '80%'
        // } else if (ourMinutes == 21) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '70%'
        // } else if (ourMinutes == 18) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '60%'
        // } else if (ourMinutes == 15) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '50%'
        // } else if (ourMinutes == 12) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '40%'
        // } else if (ourMinutes == 9) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '30%'
        // } else if (ourMinutes == 6) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '20%'
        // } else if (ourMinutes == 3) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '10%'
        // } else if (ourMinutes == 0) {
        //     document.querySelector('.order-expectation__line--blue').style.width = '0%'
        // }

    }, 1000)
}
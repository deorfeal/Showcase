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

$(function () {

    $('.questions-item').on('click', function (event) {
        if ($(this)[0].classList.contains('questions-item--active')) {
            $(this).removeClass('questions-item--active');
        } else {
            $('.questions-item').removeClass('questions-item--active');
            $(this).addClass('questions-item--active');
        }
    });

    $('.header__burger').on('click', function (event) {
        $('.header').addClass('header--active');
    });

    $('.menu-phone__top-close').on('click', function (event) {
        $('.header').removeClass('header--active');
    });

    $('.partners-bottom__link').on('click', function (event) {
        $('.partners-column__more').toggleClass('partners-column__more--active');
        $('.partners-bottom').toggleClass('partners-bottom--active');

    });



})

new Swiper('.top-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.top-swiper__buttons-prev',
        nextEl: '.top-swiper__buttons-next',
    },
    pagination: {
        el: '.top-swiper__pagination',
        type: 'bullets',
        clickable: true
    },
});

new Swiper('.partners-swiper', {
    slidesPerView: 5,
    spaceBetween: 15,
    enable: false,
    breakpoints: {
        301: {
            slidesPerView: 2.2,
            spaceBetween: 4,
            enable: true,
        },
        801: {
            slidesPerView: 4,
            spaceBetween: 4,
            spaceBetween: 15,
            enable: true,
        },
        1301: {
            slidesPerView: 5,
            spaceBetween: 15,
            enable: false,
        }
    }
});

new Swiper('.news-swiper', {
    slidesPerView: 2.85,
    spaceBetween: 20,
    breakpoints: {
        301: {
            slidesPerView: 1.6,
            spaceBetween: 15,
        },
        601: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        901: {
            slidesPerView: 2.85,
            spaceBetween: 20,
        }
    }
});


new Swiper('.history-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        301: {
            spaceBetween: 8,
            slidesPerView: 1.5,
        },
        551: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

new Swiper('.our-partners-swiper', {
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: {
        prevEl: '.our-partners-swiper__buttons-prev',
        nextEl: '.our-partners-swiper__buttons-next',
    },
    pagination: {
        el: '.our-partners-swiper__pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        301: {
            slidesPerView: 2.9,
            spaceBetween: 20,
        },
        551: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        951: {
            slidesPerView: 5,
            spaceBetween: 50,
        }
    }
});

$('.tell-row__btn ').on('click', function (event) {
    var copyText = document.getElementById("tell-row-link");

    copyText.select();

    document.execCommand("copy");
});

$('.about-partner-tell__row-btn').on('click', function (event) {
    var copyText = document.getElementById("about-partner-tell-input");

    copyText.select();

    document.execCommand("copy");
});

$('.partner-reg-form-box__item').on('click', function (event) {
    $('.partner-reg-form-box__item').removeClass('partner-reg-form-box__item--active')
    $(this).addClass('partner-reg-form-box__item--active')
});



new Swiper('.thanks-body-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        301: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        801: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        901: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1301: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

//

new Swiper('.rewards-swiper', {
    slidesPerView: 5,
    spaceBetween: 45,
    loop: true,
    breakpoints: {
        301: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1151: {
            slidesPerView: 5,
            spaceBetween: 45,
        }
    },
    navigation: {
        nextEl: '.rewards__link',
    },

});

//

new Swiper('.all-news-swiper', {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        prevEl: '.all-news-swiper__prev',
        nextEl: '.all-news-swiper__next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        551: {
            slidesPerView: 2,
            spaceBetween: 20, 
        },
        1301: {
            slidesPerView: 3,
            spaceBetween: 32,
        }
    }
});

new Swiper('.report-top-swiper', {
    slidesPerView: 3,
    spaceBetween: 2,
    breakpoints: {
        301: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        551: {
            slidesPerView: 2.5,
            spaceBetween: 2, 
        },
        651: {
            slidesPerView: 3.5,
            spaceBetween: 2, 
        },
        901: {
            slidesPerView: 4.5,
            spaceBetween: 2, 
        }
    }
});

new Swiper('.materials-item-swiper--first ', {
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
        301: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        551: {
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        651: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        },
        901: {
            slidesPerView: 4,
            spaceBetween: 25,
        }
    }
});
new Swiper('.materials-item-swiper--second', {
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
        301: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        551: {
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        651: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        },
        901: {
            slidesPerView: 4,
            spaceBetween: 25,
        }
    }
});
new Swiper('.materials-item-swiper--third', {
    slidesPerView: 4.5,
    spaceBetween: 25,
    breakpoints: {
        301: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        551: {
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        651: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        },
        901: {
            slidesPerView: 4.5,
            spaceBetween: 25,
        }
    }
});
new Swiper('.materials-item-swiper--fourth', {
    slidesPerView: 4.5,
    spaceBetween: 25,
    breakpoints: {
        301: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        551: {
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        651: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        },
        901: {
            slidesPerView: 4.5,
            spaceBetween: 25,
        }
    }
});



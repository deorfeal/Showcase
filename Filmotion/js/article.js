document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("article > div[id]");
    const navLinks = document.querySelectorAll(".aside-link");

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {  // 60 – это отступ для более точного попадания
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

new Swiper('.read-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    speed: 750,
    breakpoints: {
        301: {
            slidesPerView: 1.35,
            loop: true,
            spaceBetween: 16,
            speed: 750,
        },
        451: {
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 16,
            speed: 750,
        },
        551: {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
        768: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 30,
            speed: 750,
        },
    }
});

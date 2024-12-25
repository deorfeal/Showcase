// Получаем все элементы списка с классом tubs-list__item
const tabs = document.querySelectorAll('.tubs-list__item');

// Проходим по каждому элементу и добавляем обработчик события
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        // Удаляем класс у всех элементов
        tabs.forEach(item => item.classList.remove('tubs-list__item--active'));

        // Добавляем класс только к тому элементу, на который кликнули
        this.classList.add('tubs-list__item--active');
    });
});

$(function () {
    $('.articles__btn').on('click', function (event) {
        $('.articles-item--more').toggleClass('articles-item--hidden');
    });
})

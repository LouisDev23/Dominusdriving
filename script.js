document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        const readMoreButton = card.querySelector('.read-more');
        const readLessButton = card.querySelector('.read-less');

        readMoreButton.addEventListener('click', function () {
            card.querySelector('.card-front').style.display = 'none';
            card.querySelector('.card-back').style.display = 'block';
        });

        readLessButton.addEventListener('click', function () {
            card.querySelector('.card-front').style.display = 'block';
            card.querySelector('.card-back').style.display = 'none';
        });
    });
});

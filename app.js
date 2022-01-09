const questionBox = document.querySelectorAll('.question-box');
const questionText = document.querySelectorAll('.question');

questionText.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement;
        questionBox.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show');
            }
        });
        question.classList.toggle('show');
    });
});

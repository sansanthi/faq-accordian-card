let downArrIcon = document.querySelectorAll('.down-icon');
const questionBox = document.querySelectorAll('.question-box');

downArrIcon.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const question = e.currentTarget.parentElement.parentElement;
        questionBox.forEach(function(item){
                        if(item !== question){
                            item.classList.remove('show');
                        }
                    });
        question.classList.toggle('show');
    })
})

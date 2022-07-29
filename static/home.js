window.addEventListener('load', function(){

    const slides = document.querySelectorAll('.container');
    const slide_li = document.querySelectorAll('.container .introDetail .group');
    const slideCount = slide_li.length;
    
    const nextButton = document.querySelector('.after #rigntBtn');
    const prevButton = document.querySelector('.before #leftBtn');
    
    const button = document.querySelectorAll('.button');
    
    let currentIdx = 0;
    
    function moveSlide(num) {
        slides.getElementsByClassName.left = -num * 800 + 'px';
        currentIdx = num;
    }
    
    nextButton.addEventListener('click', function() {
        if (currentIdx < slideCount - 2 ) {
            moveSlide(currentIdx + 1);
        } else {
            moveSlide(0);
        }
    });
    
    prevButton.addEventListener('click', function() {
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        } else {
            moveSlide(slideCount - 2);
        }
    });
    
    function setStyle_m(num) {
        for (let i = 0; i < mem_menu.length; i++) {
            if (i == num) {
                button[i].classList.remove('unselected');
                button[i].classList.add('selected');
            } else {
                button[i].classList.remove('selected');
                button[i].classList.add('unselected');
            }
        }
    
        moveSlide(0);
    }
})



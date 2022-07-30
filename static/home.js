// window.addEventListener('load', function(){

//     const slides = document.querySelectorAll('.container');
//     const slide_li = document.querySelectorAll('.container .introDetail .group');
//     const slideCount = slide_li.length;
    
//     const nextButton = document.querySelector('.after #rigntBtn');
//     const prevButton = document.querySelector('.before #leftBtn');
    
//     const button = document.querySelectorAll('.button');
    
//     let currentIdx = 0;
    
//     function moveSlide(num) {
//         slides.getElementsByClassName.left = -num * 800 + 'px';
//         currentIdx = num;
//     }
    
//     nextButton.addEventListener('click', function() {
//         if (currentIdx < slideCount - 2 ) {
//             moveSlide(currentIdx + 1);
//         } else {
//             moveSlide(0);
//         }
//     });
    
//     prevButton.addEventListener('click', function() {
//         if (currentIdx > 0) {
//             moveSlide(currentIdx - 1);
//         } else {
//             moveSlide(slideCount - 2);
//         }
//     });
    
//     function setStyle_m(num) {
//         for (let i = 0; i < mem_menu.length; i++) {
//             if (i == num) {
//                 button[i].classList.remove('unselected');
//                 button[i].classList.add('selected');
//             } else {
//                 button[i].classList.remove('selected');
//                 button[i].classList.add('unselected');
//             }
//         }
    
//         moveSlide(0);
//     }
// })


// const sliderWrapper = document.querySelector('.container');
// const sliderContainer = documnet.querySelector('.IntroDetail');
// const btnPrev = document.querySelector('.before');
// const btnNext = document.querySelector('.after');

// let slides = document.querySelector('.group');
// let slideCount = slides.length;
// let currentIndex = 0;

// let topHeight = slides[0].offsetHeight;
// function calculateTallsetSlide() {
//     for(let i = 0; i < slideCount; i++) {
//         if(slides[i].offsetHeight > topHeight) {
//             topHeight = slides[i].offsetHeight;
//         }
//     }
//     sliderContainer.style.height = '${topHeight}px';
//     sliderWrapper.style.height = '${topHeight}px';
// }
// calculateTallsetSlide();

// for(let i = 0; i < slideCount; i++) {
//     slides[i].style.left = '${i * 100}%';
// }

// btnPrev.addEventListener('click', () => {
//     goToSlide(currentIndex - 1);
// });
// btnNext.addEventListener('click', () => {
//     goToSlide(currentIndex + 1);
// });

// function goToSlide(idx) {
//     sliderContainer.style.left = '${idx * -100}%';
//     sliderContainer.classList.add('animated');
//     currentIndex = idx;
//     updateNav();
// }

// function updateNav() {
//     if(currentIndex == 0) {
//         btnPrev.classList.add('disabled');
//     } else {
//         btnPrev.classList.add('disabled');
//     }
//     if(currentIndex == slideCount - 1){
//         btnNext.classList.add('disabled');
//     } else {
//         btnNext.classList.remove('disabled');
//     }
// }

// goToSlide(0);

// btnPrev.addEventListener('click', () => {
//     if(currentIndex != 0) {
//         goToSlide(currentIndex -1);
//     } else {
//         goToSlide(slidecount - 1);
//     }
// });
// btnNext.addEventListener('click', () => {
//     if(currentIndex < slideCount - 1) {
//         goToSlide(currentIndex + 1);
//     } else {
//         goToSlide(0);
//     }
// });

let page = document.querySelectorAll(".pageLink");

function handleClick(event) {

  if (event.target.classList[0] === "clicked") {
    page[i].classList.add("clicked");
  } else {
    for (let i = 0; i < page.length; i++) {
      page[i].classList.add("unclicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (let i = 0; i < page.length; i++) {
    page[i].addEventListener('click', handleClick);
  }
}

init();
let slides = document.querySelector('.container');
let slide_li = document.querySelectorAll('.group');
let currentIdx = 0; // 현재 위치
let slideCount = slide_li.length;
const prevButton = document.querySelector('.before #leftBtn');
const nextButton = document.querySelector('.after #rightBtn');

function moveSlide(num) {
  slides.style.left = (-num * 97 + '%');
  currentIdx = num;
  setStyle_m(num);
}

nextButton.addEventListener('click', function() {
  if (currentIdx < slideCount - 1) {
      moveSlide(currentIdx + 1);
  } else {
      moveSlide(0);
  }
});

prevButton.addEventListener('click', function() {
  if (currentIdx > 0) {
      moveSlide(currentIdx - 1);
  } else {
      moveSlide(slideCount - 1);
  }
});

let mem_menu = document.querySelectorAll('#button .btn');

function setStyle_m(num) {
  for (var i = 0; i < mem_menu.length; i++) {
      if (i == num) {
          mem_menu[i].classList.remove('menu_unselected');
          mem_menu[i].classList.add('menu_selected');
      } else {
          mem_menu[i].classList.remove('menu_selected');
          mem_menu[i].classList.add('menu_unselected');
      }
  }
  
  // moveSlide(num);
}

window.onload = function() {
  setStyle_m(currentIdx);
}
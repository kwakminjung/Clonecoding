// document.querySelector('#H1').addEventListener('click', function(){
//     document.querySelector('.WorkTV').style.transform = 'translate(0vw)';
// });

// document.querySelector('#H2').addEventListener('click', function(){
//     document.querySelector('.WorkTV').style.transform = 'translate(-84vw)';
// });

// document.querySelector('#H3').addEventListener('click', function(){
//     document.querySelector('.WorkTV').style.transform = 'translate(-168vw)';
// });

// document.querySelector('#H4').addEventListener('click', function(){
//     document.querySelector('.WorkTV').style.transform = 'translate(-252vw)';
// });


let workPage = document.querySelectorAll(".H");

function workClick(event) {

  if (event.target.classList[0] === "selected") {
    workPage[i].classList.add("selected");
  } else {
    for (let i = 0; i < workPage.length; i++) {
      page[i].classList.add("unselected");
    }

    event.target.classList.remove("selected");
  }
}

function border() {
  for (let i = 0; i < workPage.length; i++) {
    page[i].addEventListener('click', workClick);
  }
}

border();
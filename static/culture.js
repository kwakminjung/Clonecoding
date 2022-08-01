let btn = document.querySelectorAll('.HTT .H');
// let cont = document.querySelector('.WorkTV');

btn[0].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(0%)';
    // cont.classList.replace('Htrans1');
    for(let i=0; i<4; i++) {
        if(i==0) {
            // cont.classList.replace('Htrans1');
            btn[i].classList.add('selected');
            btn[i].classList.remove('unselected');
        } else {
            btn[i].classList.remove('selected');
            btn[i].classList.add('unselected');
        }
    }
});

btn[1].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(-100%)';
    // cont.classList.replace('Htrans2');
    for(let i=0; i<4; i++) {
        if(i==1) {
            // cont.classList.replace('Htrans2');
            btn[i].classList.add('selected');
            btn[i].classList.remove('unselected');
        } else {
            btn[i].classList.remove('selected');
            btn[i].classList.add('unselected');
        }
    }
});

btn[2].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(-200%)';
    // cont.classList.replace('Htrans3');
    for(let i=0; i<4; i++) {
        if(i==2) {
            // cont.classList.replace('Htrans3');
            btn[i].classList.add('selected');
            btn[i].classList.remove('unselected');
        } else {
            btn[i].classList.remove('selected');
            btn[i].classList.add('unselected');
        }
    }
});

btn[3].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(-300%)';
    // cont.classList.replace('Htrans4');
    for(let i=0; i<4; i++) {
        if(i==3) {
            btn[i].classList.add('selected');
            btn[i].classList.remove('unselected');
        } else {
            btn[i].classList.remove('selected');
            btn[i].classList.add('unselected');
        }
    }
});
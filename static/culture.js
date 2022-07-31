let btn = document.querySelectorAll('.HTT .H');

btn[0].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(0vw)';
    for(let i=0; i<4; i++) {
        if(i==0) {
            btn[i].classList.add('selected');
            btn[i].classList.remove('unselected');
        } else {
            btn[i].classList.remove('selected');
            btn[i].classList.add('unselected');
        }
    }
});

btn[1].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(-81.5vw)';
    for(let i=0; i<4; i++) {
        if(i==1) {
            btn[i].classList.add('selected');
            btn[i].classList.remove('unselected');
        } else {
            btn[i].classList.remove('selected');
            btn[i].classList.add('unselected');
        }
    }
});

btn[2].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(-163vw)';
    for(let i=0; i<4; i++) {
        if(i==2) {
            btn[i].classList.add('selected');
            btn[i].classList.remove('unselected');
        } else {
            btn[i].classList.remove('selected');
            btn[i].classList.add('unselected');
        }
    }
});

btn[3].addEventListener('click', function(){
    document.querySelector('.WorkTV').style.transform = 'translate(-245vw)';
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
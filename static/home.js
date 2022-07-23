document.querySelector('#btn2').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-84vw)';
    document.querySelector('#btn2').src = "http://127.0.0.1:5500/carrot/static/images/blackcircle.jpg";
    document.querySelector('#btn1').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
    document.querySelector('#btn3').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
});

document.querySelector('#btn3').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-168vw)';
    document.querySelector('#btn3').src = "http://127.0.0.1:5500/carrot/static/images/blackcircle.jpg";
    document.querySelector('#btn1').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
    document.querySelector('#btn2').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
});

document.querySelector('#btn1').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(0vw)';
    document.querySelector('#btn1').src = "http://127.0.0.1:5500/carrot/static/images/blackcircle.jpg";
    document.querySelector('#btn2').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
    document.querySelector('#btn3').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
});

document.querySelector('#nextBtn').addEventListener('click', function(){
    var Glist = document.querySelector('.group');
    //만약 화면에 Glist[1] 보이면 -84vw 만큼 이동
    //만약 화면에 Glist[2] 보이면 -84*2vw 만큼 이동
    //btn(아래 단추)와 같이 움직여야 하는 점 감안
    document.querySelector('.container').style.transform = 'translate(-84vw)';

    document.querySelector('#btn2').src = "http://127.0.0.1:5500/carrot/static/images/blackcircle.jpg";
    document.querySelector('#btn1').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
    document.querySelector('#btn3').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
});

document.querySelector('#beforeBtn').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(0vw)';

    document.querySelector('#btn1').src = "http://127.0.0.1:5500/carrot/static/images/blackcircle.jpg";
    document.querySelector('#btn2').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
    document.querySelector('#btn3').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
});
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
    document.querySelector('.container').style.transform = 'translate(-84vw)';

    document.querySelector('#btn2').src = "http://127.0.0.1:5500/carrot/static/images/blackcircle.jpg";
    document.querySelector('#btn1').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
    document.querySelector('#btn3').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
})

document.querySelector('#beforeBtn').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(0vw)';

    document.querySelector('#btn1').src = "http://127.0.0.1:5500/carrot/static/images/blackcircle.jpg";
    document.querySelector('#btn2').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
    document.querySelector('#btn3').src = "http://127.0.0.1:5500/carrot/static/images/circle.jpg";
})

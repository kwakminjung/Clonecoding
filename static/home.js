$(document).ready(function() {
    console.clear();
    
    var slideIndex = 0;

    setInterval(function(){

        if(slideIndex > 2) {
            slideIndex = 0;
        };

        $(".container").css({ " left " : slideIndex * -900 });

        console.log(slideIndex);

        slideIndex++;

    }, 1000);
});
let acc = document.getElementsByClassName("accordion");

for (let i=0; i < acc.length; i++) {
    acc[i].onclick = function() {
        for (let j = 0; j < acc.length; j++) {
            if(j % 2==0){
                acc[j].classList.remove("active");
            } else {
                acc[j].classList.add("active");
            }

            
            // if (this !== acc[j]) {
            //     acc[j].nextElementSibling.getElementsByClassName.maxHeight = null;
            // }
        }

        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.classList.maxHeight) {
            this.classList.remove("active");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

// acc.addEventListner('click', function() {
//     for (let i = 0; ; j++) {
//         if(i % 2 == 0){
//             acc.classList.remove("active");
//         } else {
//             acc.classList.add("active");
//         }
//     }
// });
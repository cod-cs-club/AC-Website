let slideIndex = 1;
let myTimer;

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 2000);
})

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
    showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function(){plusSlides(n + 2)}, 2000);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("homepage-images");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
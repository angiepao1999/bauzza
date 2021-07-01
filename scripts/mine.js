var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);    
}

function currentSlide(n){
    showSlides(slideIndex = n);  
}

function showSlides(n){
    var i;
    var background = document.getElementsByClassName("container-general").innerHTML;
    var slides = document.getElementsByClassName("container-general");
    var dots = document.getElementsByClassName("dot");
   
    if (n > slides.length){
        slideIndex = 1
    }
  

    if (n < 1){
        slideIndex = slides.length
    }

    if (background == "green") {
        document.body.style.backgroundColor = "linear-gradient(to right, #599B96 0%,#599B96 50%, #42817E 50%,#42817E 100%"; 
    }
    
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }


    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", " ");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className = " active";

}

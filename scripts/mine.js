var slideIndex = 1;

function changeDesign(array,color){
    for(i = 0; i < array.length; i++){
        array[i].style.color = color;
    }

}

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);    
}

function currentSlide(n){
    showSlides(slideIndex = n);  
}

function showSlides(n){
    var i;
    var container = document.getElementsByClassName("container-general")[0];
    var menu = document.getElementsByClassName("navbar-navbar");
    var img = document.getElementsByClassName("chair-one");
    var title = container.getElementsByTagName("h2");
    var text = container.getElementsByTagName("p");
    var button = document.getElementsByClassName("button");
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
   
    if (n > slides.length){
        slideIndex = 1
    }

    if (n % 2 == 0) {
        container.style.background = "linear-gradient(to right, #599B96 0%,#599B96 50%, #42817E 50%,#42817E 100%)"; 
        changeDesign(title,"#fff")
        changeDesign(text,"#fff")
        changeDesign(menu,"#fff")
        
        
    }else{
        container.style.background = "linear-gradient(to right, #E7BC38 0%,#E7BC38 50%, #C68F11 50%,#C68F11 100%)";
        changeDesign(title, "#000")
        changeDesign(text,"#000")
        changeDesign(menu,"#000")
        

    }

    if (n < 1){
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", " ");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


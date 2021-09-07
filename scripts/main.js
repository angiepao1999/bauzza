let slideIndex = 1;


if (window.outerWidth <= 700){
    const slides = document.getElementsByClassName("mySlides");
    for(let i = 0; i < slides.length; i++){
        slides[i].hidden=true
    }
}

function changeDesign(array, color){
    for(let i = 0; i < array.length; i++){
        array[i].style.color = color;
    }
}

if (window.outerWidth >= 700){
    showSlides(slideIndex);
}

function plusSlides(n){
    showSlides(slideIndex += n);    
}

function currentSlide(n){
    showSlides(slideIndex = n);  
}

function showSlides(n){
    let i;
    const container = document.getElementsByClassName("container-general")[0];
    const menu = document.getElementsByTagName("h3");
    const title = container.getElementsByTagName("h2");
    const text = container.getElementsByTagName("p");
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    const buttonSlide = document.getElementById("button-slide");

    if (n > slides.length)
        slideIndex = 1

    if (n % 2 === 0) {
        container.style.background = "linear-gradient(to right, #599B96 0%,#599B96 50%, #42817E 50%,#42817E 100%)";
        changeDesign(title,"#fff")
        changeDesign(text,"#fff")
        changeDesign(menu,"#fff")

        buttonSlide.style.backgroundColor = "#68CBCC";
        buttonSlide.style.boxShadow = "0 3px 5px 0 #68CBCC, 0 3px 5px 0 #68CBCC"
        buttonSlide.style.color = "white"
        buttonSlide.style.margin = "20px 5px 0 20%"
        

    }else{
        container.style.background = "linear-gradient(to right, #E7BC38 0%,#E7BC38 50%, #C68F11 50%,#C68F11 100%)";
        changeDesign(title,"#000")
        changeDesign(text,"#000")
        changeDesign(menu,"#000")

        buttonSlide.style.backgroundColor = "#C68F11"
        buttonSlide.style.boxShadow = "0 3px 5px 0 #C68F11, 0 3px 5px 0 #C68F11"
        buttonSlide.style.color = "black"
        buttonSlide.style.margin = "20px 5px 0 25%"
        
    }
    
    if (n < 1)
        slideIndex = slides.length

    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    
    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", " ");

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


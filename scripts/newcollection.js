(function(){

    let animation = document.querySelectorAll("#animation");
    
    function showScroll (){
        let scrollTop = document.documentElement.scrollTop;
        for( var i = 0; i < animation.length; i++){
            let heigthAnimation= animation [i].offsetTop;
            if( heigthAnimation - 400 < scrollTop){
                animation[i].style.opacity = 1;
                animation[i].classList.add("showUp")
            }
        }
    }
    
    window.addEventListener('scroll', showScroll);
    
    }())
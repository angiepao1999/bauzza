document.addEventListener('scroll', function(){
    let building = document.getElementById('building');

    building.querySelectorAll("div").forEach(function(div){
      let top = document.body.scrollTop;
      let bottom = top + document.body.offsetHeight;

      console.log("Top " + top)
      console.log("Botton " + bottom)

      if ((div.offsetTop < top && top < div.offsetTop + div.offsetHeight) ||
          (div.offsetTop < bottom && bottom < div.offsetTop + div.offsetHeight)) {
            div.classList.add('animation');
        }
    });

});
 
let master = document.getElementById('building');
console.log(master);
master.addEventListener('scroll', function(){
    console.log("test");
    let top = this.scrollTop;
    let bottom = top+this.offsetHeight;
    
    
    this.querySelectorAll("div").forEach(function(div){
        console.log(div);
      if (
        (div.offsetTop < top && top <div.offsetTop+div.offsetHeight) ||
        (div.offsetTop < bottom && bottom <div.offsetTop+div.offsetHeight)
      ){
        div.classList.add('animation');
      }
    });
    
});
  
function myResponsive(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "#fff";
    } else {
     document.body.style.backgroundColor = "#f4f4f4";
    }
}
 
var x = window.matchMedia("(max-width:  700px)")
myResponsive(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
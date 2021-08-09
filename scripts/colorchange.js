let myImg =  document.getElementById("myImg");
const container = document.getElementsByClassName("container-general")[0]

function changeImg() {
    myImg.src = "imgthree/sel-chair-first.png";
    container.style.background = "linear-gradient(to right, #D8C9BB 0%,#D8C9BB 50%, #fff 50%,#fff 100%)"; 
}


function myFunction() {
    console.log(container.style);
    myImg.src = "imgthree/sel-chair-second.png";
    container.style.background = "linear-gradient(to right, #EAEAEA 0%,#EAEAEA 50%, #fff 50%,#fff 100%)"; 
}


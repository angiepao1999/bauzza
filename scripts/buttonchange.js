let dot1 = document.getElementById("dot-1");
let dot2 = document.getElementById("dot-2");
let classDotSelect = "dot-select"


function changeClass(){
    if(!dot1.classList.contains(classDotSelect)){
        dot1.classList.add(classDotSelect);
        dot2.classList.remove(classDotSelect);
    }
}

function changeClass2(){
    if(!dot2.classList.contains(classDotSelect)){
        dot2.classList.add(classDotSelect);
        dot1.classList.remove(classDotSelect);
    }
}

dot1.onclick = changeClass;
dot2.onclick = changeClass2;
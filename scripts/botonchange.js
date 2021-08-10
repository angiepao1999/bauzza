function changeButton(){
    document.getElementsByClassName("dot-select");
    
}
document.getElementsByClassName("dot-select").onclick = function(){
    changeButton();
}
let tabcontainer = document.getElementById('tab-container');
let tabs = document.getElementsByClassName('tabcontent')

for (let i = 0; i < tabs.length; i++) {
  if(i == 0){
    tabs[i].hidden =false;
  }else{
    tabs[i].hidden =true;
  }
}
 
function propTabs(evt, index) {
  var i, tablinks;
  let tabcontent= tabcontainer.children;

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].hidden = true;
  }
     
  tabcontent[index].hidden= false;

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  evt.currentTarget.className += " active";

}


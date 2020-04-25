function hideAll(){
  var divs = document.getElementsByClassName("show");
  for(i = 0; i < divs.length; i++){
    divs[i].classList.replace("show", "hidden");
  }
}

function show(elementId){
  var div = document.getElementById(elementId).classList.replace("hidden", "show");
}

function showContent(element){
  hideAll();
  show(element.getAttribute("value"));
}

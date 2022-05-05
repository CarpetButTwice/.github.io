function openNav() {
  document.getElementById("side_bar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-50px";
  document.getElementById("content").style.marginLeft = "250px";


  
}

function closeNav() {
  document.getElementById("side_bar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0px";
  document.getElementById("content").style.marginLeft = "0px";
}

/*
window.onscroll = function() {myFunction()};

var header = document.getElementById("navigation");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}*/
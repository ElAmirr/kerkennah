// small divice nav
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// bg ayto slide
var myIndexx = 0;
carousel();

function carousel() {
  var ix;
  var xx = document.getElementsByClassName("bg-title");
  for (ix = 0; ix < xx.length; ix++) {
    xx[ix].style.display = "none";  
  }
  myIndexx++;
  if (myIndexx > xx.length) {myIndexx = 1}    
  xx[myIndexx-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// Animations

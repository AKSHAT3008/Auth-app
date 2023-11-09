let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

function validateform() {
var username = document.getElementById("user");
var password = document.getElementById("pass");

  if (username == "" && password.length < 6) {
    alert("Name can't be blank");  
  return false;  


  }
  else if (username == "" && password.length >= 6) {
    window.location.href = ("incorrect_u.html");

  }
  else if (userpassword.length < 6 && username != "") {
    location.replace = ("incorrect_p.html");

  }
  else {
    location.replace = ("correct.html")

  }
}
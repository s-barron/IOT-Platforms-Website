/* Code for Collapsibles */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}




/*Code for Contact Form Validation */
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email.value)) {
    return true;
  }
  else {
    alert("You have entered an invalid email address!")
    return false;
  }
}

function validateForm() {
  let fname = document.forms["contactForm"]["fname"].value;
  let msg = document.forms["contactForm"]["message"].value;
  if (fname == "") {
    alert("Please enter your first name.");
    return false;
  }
  else if (msg == "") {
    document.getElementById("message").innerHTML = "(Please leave us a message.)";
    return false;
  }
  else {
    validateEmail();
  }
}

/*Code for video swap */
const video_list = Array(4);


video_list[0] = "https://www.youtube.com/embed/kaNtg1HGXbY";
video_list[1] = "https://www.youtube.com/embed/X9dH3x9Vjl4";
video_list[2] = "https://www.youtube.com/embed/Hi3Km1PV45M";
video_list[3] = "https://www.youtube.com/embed/9MbtJa42WoM";

const description_list = Array(4);

description_list[0] = "How to connect your micro:bit, scroll 'Hello!' across the LED array and display an image when a button is pressed.";
description_list[1] = "How to respond to accelerometer events, such as physically shaking the board.";
description_list[2] = "How to create a simple temperature gauge using the internal temperature sensor and a servo.";
description_list[3] = "How to create a simple messenger app using the radio on two separate micro:bits. Afterwards, we demonstrate how to create a light sensor.";


counter = 0

//function to swap a video src on the page

function getNextVideo() {
  document.getElementById("videoPlayer").src = video_list[counter];
  document.getElementById("description").innerHTML = description_list[counter]; 
  counter = counter + 1;
  if (counter > 4) {
    counter = 0;
  }
}


function video1() {
  document.getElementById("videoPlayer").src = video_list[0];
  document.getElementById("description").innerHTML = description_list[0];
}

function video2() {
  document.getElementById("videoPlayer").src = video_list[1];
  document.getElementById("description").innerHTML = description_list[1];
}

function video3() {
  document.getElementById("videoPlayer").src = video_list[2];
  document.getElementById("description").innerHTML = description_list[2];
}

function video4() {
  document.getElementById("videoPlayer").src = video_list[3];
  document.getElementById("description").innerHTML = description_list[3];
}


/* Code for Image Carousel*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
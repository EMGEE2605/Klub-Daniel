// var gallery = document.querySelector('.gallery');
// var galleryItems = document.querySelector('.gallery-items');
// var images = galleryItems.getElementsByTagName("img");
// var currentIndex = 0;

// // Set the first image to be visible
// images[currentIndex].style.opacity = "1";

// setInterval(function(){
//   // Hide the current image
//   images[currentIndex].style.opacity = "0";

//   // Increment the current index
//   currentIndex = (currentIndex + 1) % images.length;

//   // Show the next image
//   images[currentIndex].style.opacity = "1";

// }, 3000);

// var galleryContainer = document.querySelector('.gallery-container');
// var gallery = document.querySelector('.gallery');
// var galleryItems = document.querySelectorAll('.gallery-item');
// var currentIndex = 0;
// var prevButton = document.querySelector('.prev-button');
// var nextButton = document.querySelector('.next-button');

// function moveToPrev() {
//   currentIndex = currentIndex - 1;
//   if(currentIndex < 0) {
//     currentIndex = galleryItems.length - 1;
//   }
//   gallery.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
// }

// function moveToNext() {
//   currentIndex = (currentIndex + 1) % galleryItems.length;
//   gallery.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
// }

// prevButton.addEventListener('click', moveToPrev);
// nextButton.addEventListener('click', moveToNext);

var galleryContainer = document.querySelector('.gallery-container');
var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var currentIndex = 0;
var slideInterval = setInterval(moveToNext, 5000); // slide interval 5 seconds

function moveToNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  if (currentIndex === 0) {
    var firstItem = galleryItems[0].cloneNode(true);
    gallery.appendChild(firstItem);
    setTimeout(function() {
      gallery.style.transition = "none";
      gallery.style.transform = "translateX(0%)";
    }, 1000);
    setTimeout(function() {
      gallery.style.transition = "transform 1s";
      gallery.removeChild(firstItem);
    }, 2000);
  }
  gallery.style.transform = 'translateX(-' + currentIndex * 33.33 + '%)';
}




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}





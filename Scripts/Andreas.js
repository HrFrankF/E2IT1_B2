let imageIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("diaimages");
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  imageIndex++;
  if (imageIndex > slides.length) {
    imageIndex = 1;
  }
  
  slides[imageIndex - 1].style.display = "block";
  setTimeout(showSlides, 8000);
}
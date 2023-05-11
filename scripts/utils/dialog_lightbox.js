// Open the Modal

function openLightbox(clicked_id) {
  // Tu as fais 2 event listner pour ouvrir lightbox, c'est quoi l'intert de ca (peux tu m'expliquer duranr la sesssion prochaine) ?
  
  document.querySelector("#lightbox").style.display = "block";
  console.log("Open ?", clicked_id);
  showSlides(clicked_id);
  currentSlide(clicked_id);
  const previous = document.querySelector(".previousLightbox");
  previous.addEventListener("click", () => {
    console.log("previous?");
    plusSlides(-1);
  });

  const next = document.querySelector(".nextLightbox");
  next.addEventListener("click", () => {
    console.log("next?");
    plusSlides(1);
  });
}

// Close the Modal
function closeLightbox() {
  document.querySelector("#lightbox").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("lightboxMedia");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 // slides[slideIndex - 1].style.display = "block";
}

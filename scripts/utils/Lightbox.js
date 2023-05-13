class LightBox {
  constructor(photographer) {
    this.photographer = photographer;
    console.log(photographer);
  }

  show(photographer, n) {
    this.photographer = photographer;
    document.querySelector("#lightbox").style.display = "block";
    let slides = document.getElementsByClassName("lightboxMedia");
    console.log(slides);
    let i;
    let slideIndex = 1;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //slides[slideIndex - 1].style.display = "block";
    const modalBloc = mediaFactory(this.photographer);
    modalBloc.contentModal();
  }
  next() {
    const next = document.querySelector(".nextLightbox");
    next.addEventListener("click", () => {
      console.log("next?");
      // plusSlides(1);
    });
  }
  previous() {
    const previous = document.querySelector(".previousLightbox");
    previous.addEventListener("click", () => {
      console.log("previous?");
      // plusSlides(-1);
    });
  }
}

// function plusSlides(n) {
//   let slideIndex;
//   slideIndex += n;
// }

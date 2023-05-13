class LightBox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
    this.manageEvent();
    console.log(listElement);
  }
  // constructor(photographer) {
  //   this.photographer = photographer;
  //   console.log(photographer);
  // }

  show(photographer) {
    this.currentElement = photographer;
    console.log(photographer);
    this.display();
  }
  display(n) {
    document.querySelector("#lightbox").style.display = "block";
    let slides = document.getElementsByClassName("lightboxMedia");

    let i;
    let slideIndex;
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
    const modalBloc = mediaFactory(this.currentElement);
    modalBloc.contentModal();
  }
  next() {
    this.display();
    let index = this.listElement.findIndex(
      (elem) => elem.id == this.currentElement.id
    );

    if (index == this.listElement.length - 1) {
      console.log(this.listElement[0], "TERMINER !! ");
      this.currentElement = this.listElement[0];
    } else {
      this.currentElement = this.listElement[index + 1];
    }
  }
  previous() {
    let index = this.listElement.findIndex(
      (elem) => elem.id == this.currentElement.id
    );
    this.display();
    if (index == 0) {
      this.currentElement = this.listElement[this.listElement.length - 1];
    } else {
      this.currentElement = this.listElement[index - 1];
    }
  }

  manageEvent() {
    document.querySelector(".nextLightbox").addEventListener("click", () => {
      this.next();
    });
    document
      .querySelector(".previousLightbox")
      .addEventListener("click", () => {
        this.previous();
      });
  }
}

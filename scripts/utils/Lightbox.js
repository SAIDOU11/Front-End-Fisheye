class LightBox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
    this.manageEvent();
  }

  show(photographer) {
    this.currentElement = photographer;
    this.display();
  }
  display(n) {
    document.querySelector("#lightbox").style.display = "block";
    let slides = document.getElementsByClassName("lightboxMedia");
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
    const modalBloc = mediaFactory(this.currentElement);
    modalBloc.contentModal();
  }
  next() {
    let index = this.listElement.findIndex(
      (elem) => elem.id == this.currentElement.id
    );

    if (index == this.listElement.length - 1) {
      this.currentElement = this.listElement[0];
      this.display();
    } else {
      this.currentElement = this.listElement[index + 1];
      this.display();
    }
  }
  previous() {
    let index = this.listElement.findIndex(
      (elem) => elem.id == this.currentElement.id
    );

    if (index == 0) {
      this.currentElement = this.listElement[this.listElement.length - 1];
      this.display();
    } else {
      this.currentElement = this.listElement[index - 1];
      this.display();
    }
  }

  manageEvent() {
    document
      .querySelector("#lightbox .nextLightbox")
      .addEventListener("click", () => {
        this.next();
      });
    document
      .querySelector("#lightbox .previousLightbox")
      .addEventListener("click", () => {
        this.previous();
      });
    document
      .querySelector("#lightbox .closeLightbox")
      .addEventListener("click", () => {
        this.close();
      });
    document.addEventListener("keydown", (e) => {
      console.log(e.target, e.key);
      switch (e.key) {
        case "Enter":
          console.log("enter");
          //this.display();
          break;
        case "ArrowRight":
          this.next();
          break;
        case "ArrowLeft":
          this.previous();
          break;
        case "Escape":
          this.close();
          break;
      }
    });
  }
  close() {
    document.querySelector("#lightbox").style.display = "none";
  }
}

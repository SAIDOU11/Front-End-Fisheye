class LightBox {
  constructor(photographer) {
    this.photographer = photographer;
  }
  show() {
    document.querySelector("#lightbox").style.display = "block";
    // document.querySelector(".lightboxMedia").classList.add("show");
    const modalBloc = mediaFactory(this.photographer);
    modalBloc.contentModal();
  }
}

class LightBox {
  constructor(id, image, video, title) {
    this.id = id;
    this.image = image;
    this.video = video;
    this.title = title;
  }
  show(element) {
    this.currentElement = element;
    document.querySelector("#lightbox").style.display = "block";
    // document.querySelector(".lightboxMedia").classList.add("show");
    console.log(element);
  }
}

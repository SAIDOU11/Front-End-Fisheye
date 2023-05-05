class LightBox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
    console.log(listElement);
  }
  show(element) {
    const { date, id, photographerId, title, image, video, likes } =
      listElement;
    this.id = element;

    console.log(id, element, listElement, this.listElement);
  }
  // show(id) {
  //   this.currentElement = this.getElementById(id);
  //   document.querySelector("#lightbox").src = this.currentElement.picture;
  //   console.log(id);
  // }
  next() {}

  previous() {}

  manageEvent() {}

  getElementById(id) {
    return this.listElement.find((element) => element.id == id);
  }
}

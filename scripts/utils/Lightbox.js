class Lightbox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
  }
  show(element) {
    console.log("Show 888888888888888888888888");
    this.currentElement = element;
    console.log(element);
  }
  next() {}

  previous() {}

  manageEvent() {}
}

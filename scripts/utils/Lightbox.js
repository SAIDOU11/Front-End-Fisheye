class Lightbox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
    console.log("L 55555555555555555555555555555555555555555");
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

class Lightbox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
  }
  show(id) {
    console.log(id);
    this.currentElement = this.getElementById(id);
    console.log(element);
  }
  next() {}

  previous() {}

  manageEvent() {}

  getElementById(id) {
    return this.listElement.find((element) => element.id == id);
  }
}

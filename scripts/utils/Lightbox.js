class LightBox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
  }
  show(id) {
    this.currentElement = this.getElementById(id);
  }
  next() {}

  previous() {}

  manageEvent() {}

  getElementById(id) {
    return this.listElement.find((element) => element.id == id);
  }
}

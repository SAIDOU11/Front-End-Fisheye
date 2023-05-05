// class Profil {
//   constructor(json) {
//     json && Object.assign(this.json);
//   }
// }

class LightBox {
  constructor(json, listElement) {
    json && Object.assign(this.json);
    this.currentElement = null;
    this.listElement = listElement;
    console.log(typeof listElement);
  }
  show(id) {
    this.currentElement = this.getElementById(id);
    document.querySelectorAll(
      ".lightbox, .contentLightbox .imageLightbox"
    ).src = this.currentElement.picture;
  }
  next() {}

  previous() {}

  manageEvent() {}

  getElementById(id) {
    return this.listElement.find((element) => element.id == id);
  }
}

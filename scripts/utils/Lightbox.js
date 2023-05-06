class LightBox {
  constructor(id, image, video, title) {
    this.id = id;
    this.image = image;
    this.video = video;
    this.title = title;
  }
  show(element) {
    this.element = element;
    console.log(element);
    document.querySelector(".lightboxMedia").classList.add("show");
    // document.querySelector(."lightboxMedia")
    // document.querySelector(".lightboxMedia");
    // let slides = document.querySelector(".lightboxMedia");
    // console.log(slides);
  }
}

/* *******************************************************************************

// class LightBox {
//   constructor(listElement) {
//     this.currentElement = null;
//     this.listElement = listElement;
//     console.log(listElement);
//   }
// }

*******************************************************************************
*/
/* *******************************************************************************
// function openLightbox(clicked_id) {
//   document.querySelector("#lightbox").style.display = "block";
//   console.log("Open ?", clicked_id);

//   document.querySelectorAll(".media_section, .card").forEach((document) => {
//     document.addEventListener("click", (e) => {
//       console.log("CLICK ??????????");
//       console.log(e);
//       //next() {}

//       // previous() {}
//     });
//   });
// }
// function closeLightbox() {
//   document.querySelector("#lightbox").style.display = "none";
// }
*******************************************************************************
*/

/* ************************************************************
// show(element) {
//   const { date, id, photographerId, title, image, video, likes } =
//     listElement;
//   this.id = element;

//   console.log(id, element, listElement, this.listElement);
// }
// show(id) {
//   this.currentElement = this.getElementById(id);
//   document.querySelector("#lightbox").src = this.currentElement.picture;
//   console.log(id);
// }
// next() {}

// previous() {}

// manageEvent() {}

// getElementById(id) {
//   return this.listElement.find((element) => element.id == id);
// }
************************************************************
*/

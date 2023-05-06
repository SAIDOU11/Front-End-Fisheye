getDataMedia().then((result) => {
  let media = result;
  console.log(media);
});

// Open the Modal
//title
function openLightbox(clicked_id) {
  document.querySelector("#lightbox").style.display = "block";
  console.log("Open ?", clicked_id);
}

// Close the Modal
function closeLightbox() {
  document.querySelector("#lightbox").style.display = "none";
}

async function displayLightbox(medias) {
  medias.forEach((photographer) => {
    let lightbox = new LightBox(
      photographer.id,
      photographer.image,
      photographer.video,
      photographer.title
    );

    console.log(lightbox);
    document.querySelectorAll(".media_section, .card").forEach((document) => {
      document.addEventListener("click", (e) => {
        console.log(e.target.id);
        lightbox.show(e.target.id);
        console.log(
          "CLICK ??????????",
          photographer.id,
          photographer.image,
          photographer.video,
          photographer.title
        );
      });
    });
  });
}

// onclick="plusSlides(1)" NEXT

// onclick="plusSlides(-1)" PREVIOUS

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.querySelector(".lightboxMedia");
//   console.log(slides);
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex - 1].style.display = "block";
// }

async function init() {
  // Récupère les datas des photographes
  const { medias } = await getDataMedia();
  console.log(medias);
  displayLightbox(medias);
  getDataMedia(medias);
}

init();

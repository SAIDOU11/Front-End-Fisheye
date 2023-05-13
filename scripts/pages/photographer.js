async function getDataMedia() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  // let data = await response.json();
  const { photographers, media } = await response.json();
  // console.log(photographers);
  // console.log(media);
  // Extraire ID
  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");
  console.log(numberId);

  // Filtre Profil
  let filterProfil = photographers;
  let photograhProfil = filterProfil.filter((obj) => obj.id == numberId);
  // console.log(photograhProfil);

  // Filtre Médias
  let filterId = media;
  let mediaProfil = filterId.filter((obj) => obj.photographerId == numberId);
  return { medias: [...mediaProfil], photographers: [...photograhProfil] };
}

async function displayLightbox(medias) {
  document.querySelectorAll(".divContent").forEach((document) => {
    document.addEventListener("click", (e) => {
      console.log(medias);
      photographer = medias.filter((elem) => e.target.id == elem.id)[0];
      let lightbox = new LightBox(medias, photographer);
      console.log(photographer, medias);
      console.log("GET ??", e.target.id);
      console.log(e);
      lightbox.show(photographer);
      lightbox.previous();
      lightbox.next();
    });
  });
}

async function displayData(medias, photographers) {
  const headerProfil = document.querySelector(".photograph-header");
  console.log(headerProfil);
  const mediasSection = document.querySelector(".media_section");
  console.log(mediasSection);

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    headerProfil.appendChild(userCardDOM);
  });
  const lightbox = document.querySelector(".lightbox");
  console.log(lightbox);
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const getUserIdWork = mediaModel.getUserIdWork();
    mediasSection.appendChild(getUserIdWork);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { medias, photographers } = await getDataMedia();
  displayData(medias, photographers);
  displayLightbox(medias);
}

init();

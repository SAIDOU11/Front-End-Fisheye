async function getDataMedia() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  // let data = await response.json();
  const { photographers, media } = await response.json();
  console.log(photographers);
  console.log(media);
  // Extraire ID
  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");
  console.log(numberId);

  // Filtre Profil
  let filterProfil = photographers;
  let photograhProfil = filterProfil.filter((obj) => obj.id == numberId);
  console.log(photograhProfil);

  // Filtre Médias
  let filterId = media;
  let mediaProfil = filterId.filter((obj) => obj.photographerId == numberId);
  console.log(mediaProfil);
  // *****************************************************************
  let lightbox = new LightBox(mediaProfil);
  console.log(lightbox);

  document.querySelectorAll(".media_section, .card").forEach((categoryDom) => {
    categoryDom.addEventListener("click", (e) => {
      console.log(lightbox);
      lightbox.show(e.currentTarget.dataset.id);
      // LightBox.run();
    });
  });

  // *****************************************************************
  return { medias: [...mediaProfil], photographers: [...photograhProfil] };
}

async function displayData(medias, photographers) {
  const headerProfil = document.querySelector(".photograph-header");
  console.log(headerProfil);
  const mediasSection = document.querySelector(".media_section");
  console.log(mediasSection);
  const contentLightbox = document.querySelector(".contentLightbox");
  console.log(contentLightbox);
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    headerProfil.appendChild(userCardDOM);
  });
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const getUserIdWork = mediaModel.getUserIdWork();
    mediasSection.appendChild(getUserIdWork);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { medias, photographers } = await getDataMedia();
  // console.log(photographers);
  // console.log(medias);
  displayData(medias, photographers);
}

init();

async function getDataMedia() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  const { photographers, media } = await response.json();
  // Extraire ID
  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");

  // Filtre Profil
  let filterProfil = photographers;
  let photograhProfil = filterProfil.filter((obj) => obj.id == numberId);

  // Filtre Médias
  let filterId = media;
  let mediaProfil = filterId.filter((obj) => obj.photographerId == numberId);
  return { medias: [...mediaProfil], photographers: [...photograhProfil] };
}

async function displayLightbox(medias) {
  document.querySelectorAll(".divContent").forEach((document) => {
    document.addEventListener("click", (e) => {
      photographer = medias.filter((elem) => e.target.id == elem.id)[0];
      let lightbox = new LightBox(medias, photographer);
      lightbox.show(photographer);
    });
  });
}

async function displayData(medias, photographers) {
  const headerProfil = document.querySelector(".photograph-header");
  const mediasSection = document.querySelector(".media_section");

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
  let paraLikes = document.querySelector(".paraLikes");
  total = 0;
  medias.forEach((item) => {
    total += item.likes;
  });
  paraLikes.textContent = total;
}

async function init() {
  // Récupère les datas des photographes
  const { medias, photographers } = await getDataMedia();
  displayData(medias, photographers);
  displayLightbox(medias);
}

init();

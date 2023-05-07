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
  // console.log(mediaProfil);
  // *****************************************************************
  let lightbox = new LightBox(mediaProfil);
  // *****************************************************************
  return { medias: [...mediaProfil], photographers: [...photograhProfil] };
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
    document
      .querySelectorAll(".media_section, .divContent")
      .forEach((document) => {
        document.addEventListener("click", (e) => {
          lightbox.show(e.target.id);
        });
      });
  });
  // const next = document.querySelector(".nextLightbox");
  // console.log(next);
  // next.addEventListener("click", () => {
  //   console.log("next?");
  // });
  // const previous = document.querySelector(".previousLightbox");
  // console.log(previous);
  // previous.addEventListener("click", () => {
  //   console.log("previous?");
  // });
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

    const modalBloc = mediaFactory(media);
    const contentModal = modalBloc.contentModal();
    lightbox.appendChild(contentModal);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { medias, photographers } = await getDataMedia();
  // console.log(photographers);
  // console.log(medias);
  displayData(medias, photographers);
  displayLightbox(medias);
}

init();

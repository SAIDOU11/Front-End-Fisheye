// import { LightBox } from "../utils/Lightbox.js";

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
  // for (let photographer of mediaProfil) {
  //   let lightbox = new LightBox(
  //     photographer.id,
  //     photographer.image,
  //     photographer.video,
  //     photographer.title
  //   );
  //   console.log(lightbox);
  //   document.querySelectorAll(".media_section, .card").forEach((document) => {
  //     document.addEventListener("click", () => {
  //       console.log(
  //         "CLICK ??????????",
  //         photographer.id,
  //         photographer.image,
  //         photographer.video,
  //         photographer.title
  //       );
  //     });
  //   });
  // }

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

  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const getUserIdWork = mediaModel.getUserIdWork();
    mediasSection.appendChild(getUserIdWork);
    // const lightbox = document.querySelector("lightbox");
    // console.log(lightbox);
    // const modalBloc = mediaFactory(media);
    // const contentModal = modalBloc.contentModal();
    // lightbox.appendChild(contentModal);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { medias, photographers } = await getDataMedia();
  console.log(photographers);
  console.log(medias);
  displayData(medias, photographers);
  displayLightbox(medias);
}

init();

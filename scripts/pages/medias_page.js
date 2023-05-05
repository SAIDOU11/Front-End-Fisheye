getDataModal().then((result) => {
  console.log(result);
  const { photographers, media } = result;
  console.log(photographers, media);
  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");
  console.log(numberId);
  let listMedias = media.map((media) => new Media(media));
  console.log(listMedias);
  let listPhotographers = photographers.map(
    (photographer) => new Photographer(photographer == numberId)
  );
  console.log(listPhotographers);
});
// Filtre Profil
// listPhotographers = photographer.filter((obj) => obj.id == numberId);
// console.log(photograhProfil);
// Extraire ID

// Filtre Médias
let filterId = media;
console.log(filterId);
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
  return { medias: [...mediaProfil], photographers: [...photograhProfil] };
});

displayData(photographers, (medias) => {
  console.log(photographers);
  const headerProfil = document.querySelector(".photograph-header");
  console.log(headerProfil);

  photographers.forEach((photographer, medias) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    headerProfil.appendChild(userCardDOM);
    const mediasSection = document.querySelector(".media_section");
    console.log(mediasSection);
    const contentLightbox = document.querySelector(".contentLightbox");
    console.log(contentLightbox);

    medias.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const getUserIdWork = mediaModel.getUserIdWork();
      mediasSection.appendChild(getUserIdWork);
    });
  });
});

init().then(media, (photographers) => {
  // Récupère les datas des photographes
  // const { medias, photographers } = await getDataMedia();
  // console.log(photographers);
  // console.log(medias);
  displayData(medias, photographers);
});

init();

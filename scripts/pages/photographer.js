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
  let lightbox = new Lightbox(mediaProfil);
  console.log(lightbox);
  document.querySelectorAll(".media_section #openModal ").forEach((event) => {
    event.addEventListener("click", (e) => {
      console.log("CLICK ??????????");
      lightbox.show(e.currentTarget.dataset.id);
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
  console.log(photographers);
  console.log(medias);
  displayData(medias, photographers);
}

init();

const dropdowns = document.querySelectorAll(".dropdown");
console.log(dropdowns);

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const arrow = dropdown.querySelector(".arrow");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    arrow.classList.toggle("arrow-rotate");
    menu.classList.toggle("menu-open");
  });
  // loop options
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      arrow.classList.remove("arrow-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

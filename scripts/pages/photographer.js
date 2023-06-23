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
  // mediaProfil.sort(byLikes);
  // mediaProfil.sort(byLikes);
  document.addEventListener("click", (e) => {
    console.log(e.target.dataset.date);
    if (e.target.dataset.date === "date") {
      mediaProfil.sort(byDate);
    }
    if (e.target.dataset.likes === "likes") {
      return mediaProfil.sort(byLikes);
    }
    if (e.target.dataset.title === "title") {
      mediaProfil.sort(byTitle);
    }
  });

  return { medias: [...mediaProfil], photographers: [...photograhProfil] };
}

async function displayLightbox(medias) {
  // console.log(medias);
  document.querySelectorAll(".divContent").forEach((document) => {
    document.addEventListener("click", (e) => {
      console.log(e);
      photographer = medias.filter((elem) => e.target.id == elem.id)[0];
      console.log(photographer);
      let lightbox = new LightBox(medias, photographer);
      lightbox.show(photographer);
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        photographer = medias.filter((elem) => e.target.id == elem.id)[0];
        let lightbox = new LightBox(medias, photographer);
        lightbox.show(photographer);
      }
    });
  });
}

async function displayData(medias, photographers) {
  const headerProfil = document.querySelector(".photograph-header");
  const mediasSection = document.querySelector(".media_section");
  headerProfil.innerHTML = "";
  mediasSection.innerHTML = "";

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    headerProfil.appendChild(userCardDOM);
  });
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const getUserIdWork = mediaModel.getUserIdWork();
    // console.log(getUserIdWork.firstChild);
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
  filterFeature(medias, photographers);
}

init();

function filterFeature(medias, photographers) {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const arrow = dropdown.querySelector(".arrow");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");
    // Event select element
    arrow.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        select.classList.toggle("select-clicked");
        arrow.classList.toggle("arrow-rotate");
        menu.classList.toggle("menu-open");
      }
    });
    select.addEventListener("click", (e) => {
      // console.log(e);
      select.classList.toggle("select-clicked");
      arrow.classList.toggle("arrow-rotate");
      menu.classList.toggle("menu-open");
    });
    // loop options
    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        // console.log(e, mediaProfil);
        // console.log(option.innerText);
        selected.innerText = option.innerText;
        if (selected.innerText === "Popularité") {
          // medias.sort((a, b) => a.likes.localeCompare(b.likes));
          // displayData(medias, photographers);
          // console.log("Popularité !!!!!!!!!!!!!!!!");
        }
        if (selected.innerText === "Date") {
          // medias.sort((a, b) => a.date.localeCompare(b.date));
          // displayData(medias, photographers);
          // console.log("Date !!!!!!!!!!!!!!!!");
        }
        if (selected.innerText === "Titre") {
          medias.sort((a, b) => a.title.localeCompare(b.title));
          displayData(medias, photographers);
          console.log(medias, photographers, "Titre !!!!!!!!!!!!!!!!");
        }
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
}
function byDate(a, b) {
  // Chronologically by year, month then day
  return new Date(a.date).valueOf() - new Date(b.date).valueOf();
}

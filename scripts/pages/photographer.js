async function getDataMedia(url) {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  let data = await response.json();
  // // Extraire ID
  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");
  console.log(numberId);
  let filterId = data.media;
  let medias = filterId.filter((obj) => obj.photographerId == numberId);
  console.log(medias);
  return { medias: [...medias] };
}

async function displayData(medias) {
  const mediasSection = document.querySelector(".media_section");
  console.log(mediasSection);
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const getUserIdWork = mediaModel.getUserIdWork();
    mediasSection.appendChild(getUserIdWork);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { medias } = await getDataMedia();
  displayData(medias);
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

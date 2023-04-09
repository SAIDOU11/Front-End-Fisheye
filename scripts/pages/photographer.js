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
    // mediasSection.insertAdjacentHTML("afterbegin", getUserIdWork);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { medias } = await getDataMedia();
  displayData(medias);
}

init();

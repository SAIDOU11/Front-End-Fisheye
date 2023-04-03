async function getDataMedia(url) {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data.media);
  let medias = [];
  medias.push(data.media);
  console.log(medias);

  // // Extraire ID

  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");
  console.log(numberId);

  // **********************************************************************************************************************
  if (medias.id === medias.photographerId) {
    console.log(
      "ok ????????????????",
      numberId,
      "??????????????????????",
      numberId
    );
    return { medias: [...medias[0]] };
  }
}

async function displayData(medias) {
  const mediasSection = document.querySelector(".media_section");

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

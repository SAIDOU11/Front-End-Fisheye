async function getPhotographers() {
  // data json file
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data.photographers);
  let photographers = [];
  photographers.push(data.photographers);
  console.log(photographers);
  let medias = [];
  medias.push(data.media);
  return {
    photographers: [...photographers[0]],
    medias: [...medias],
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

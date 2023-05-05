async function getDataModal() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  const { photographers, media } = await response.json();
  console.log(photographers, media);
  return { photographers, media };
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
  const { photographers, media } = await getDataModal();
  console.log(photographers, media);
  displayData(photographers, media);
}

init();

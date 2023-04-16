async function getPhotographers() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data.photographers);
  let photographers = [];
  photographers.push(data.photographers);
  console.log(photographers);
  return {
    photographers: [...photographers[0]],
  };
}
getPhotographers();

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
  console.log(photographers);
  displayData(photographers);
}

init();

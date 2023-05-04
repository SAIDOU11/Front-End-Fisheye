getDataModal().then((result) => {
  console.log(result);
  const { photographers } = result;
  console.log(photographers);
  let listPhotographers = photographers.map(
    (photographer) => new Photographer(photographer)
  );
  console.log(listPhotographers);
});

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
  const { photographers } = await getDataModal();
  console.log(photographers);
  displayData(photographers);
}

init();

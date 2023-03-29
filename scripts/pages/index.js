async function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data.photographers);
  console.log(data.media);
  console.log(data.photographers[0].country);
  console.log(data.photographers[1].country);
  data.map((values) => {
    let display = "";
    display = `<div class="photographer_section">
    <article class="thumb-photographer">
    <img src=${values.portrait} alt="" class="user" />
    <h2>${values.name}</h2>
    <p class="city-country"></p>
    <p class="tagline"></p>
    <p class="price"></p>
  </article>
  </div>`;
  });

  //   let photographers = [{
  //       name: "Ma data test",
  //       id: 1,
  //       city: "Paris",
  //       country: "France",
  //       tagline: "Ceci est ma data test",
  //       price: 400,
  //       portrait: "account.png",
  //     },
  //     {
  //       name: "Autre data test",
  //       id: 2,
  //       city: "Londres",
  //       country: "UK",
  //       tagline: "Ceci est ma data test 2",
  //       price: 500,
  //       portrait: "account.png",
  //     },
  //   ];

  // ********************************************************************************************************************
  // et bien retourner le tableau photographers seulement une fois récupéré

  // ********************************************************************************************************************
  //   return {
  //     photographers: [...photographers, ...photographers, ...photographers],
  //   };
}
getPhotographers();

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   displayData(photographers);
// }

// init();

// ********************************************************************************************************************

//   CSS CLASS
//   .thumb-photographer

//   const apiUrl = "./data/photographers.json";

//   async function getDataFetched() {
// const response = await fetch(apiUrl);
// const data = await response.json();
// console.log(typeof data);
// console.log(data.photographers);
// console.log(data.media);
// console.log(data.photographers[0]);
//   }

//   getDataFetched();

// ********************************************************************************************************************

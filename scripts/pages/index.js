async function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data.photographers);
  let photographers = [];
  photographers.push(data.photographers);
  console.log(photographers);
  // photographers.hits.map((news) => {
  //   console.log(news);
  // });
  // photographers.map((e) => {
  //   console.log(e.id);
  //   return {
  //     name: e.name,
  //     id: e.id,
  //     city: e.city,
  //     country: e.country,
  //     tagline: e.tagline,
  //     price: e.price,
  //     portrait: e.portrait,
  //   };
  // });
  //  data.map((e) => {
  //   return {
  //     key: e.id,
  //     name: e.name,
  //     date: e.created_at,
  //     children: fetch(`https://challenge.fnaghshin.com/api/catpro/${e.id}`).then(res => res.json())
  //   }
  // let photographers = [
  //   {
  // name: "Mimi Keel",
  // id: 243,
  // city: "London",
  // country: "UK",
  // tagline: "Voir le beau dans le quotidien",
  // price: 400,
  // portrait: "MimiKeel.jpg",
  //   },
  //   {
  //     name: "Ellie-Rose Wilkens",
  //     id: 930,
  //     city: "Paris",
  //     country: "France",
  //     tagline: "Capturer des compositions complexes",
  //     price: 250,
  //     portrait: "EllieRoseWilkens.jpg",
  //   },

  //   {
  //     name: "Tracy Galindo",
  //     id: 82,
  //     city: "Montreal",
  //     country: "Canada",
  //     tagline: "Photographe freelance",
  //     price: 500,
  //     portrait: "TracyGalindo.jpg",
  //   },

  //   {
  //     name: "Nabeel Bradford",
  //     id: 527,
  //     city: "Mexico City",
  //     country: "Mexico",
  //     tagline: "Toujours aller de l'avant",
  //     price: 350,
  //     portrait: "NabeelBradford.jpg",
  //   },
  //   {
  //     name: "Rhode Dubois",
  //     id: 925,
  //     city: "Barcelona",
  //     country: "Spain",
  //     tagline: "Je crée des souvenirs",
  //     price: 275,
  //     portrait: "RhodeDubois.jpg",
  //   },
  //   {
  //     name: "Marcel Nikolic",
  //     id: 195,
  //     city: "Berlin",
  //     country: "Germany",
  //     tagline: "Toujours à la recherche de LA photo",
  //     price: 300,
  //     portrait: "MarcelNikolic.jpg",
  //   },
  // ];

  // ********************************************************************************************************************
  // et bien retourner le tableau photographers seulement une fois récupéré

  // ********************************************************************************************************************
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

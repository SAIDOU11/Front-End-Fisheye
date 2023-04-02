// ● Vous devrez réutiliser la fonction photographerFactory que vous
// aviez étendu à l'étape 3 pour afficher le contenu de votre page, ainsi
// que votre fonction permettant d'utiliser fetch.

async function getDataMedia() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  console.log(response.status);
  let data = await response.json();
  console.log(data);

  // Extraire ID

  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");

  let medias = [
    {
      id: 342550,
      photographerId: 82,
      title: "Fashion Yellow Beach",
      image: "Fashion_Yellow_Beach.jpg",
      likes: 62,
      date: "2011-12-08",
    },
    {
      id: 8520927,
      photographerId: 82,
      title: "Fashion Urban Jungle",
      image: "Fashion_Urban_Jungle.jpg",
      likes: 11,
      date: "2011-11-06",
    },
    {
      id: 9025895,
      photographerId: 82,
      title: "Fashion Pattern on a Pattern",
      image: "Fashion_Pattern_on_Pattern.jpg",
      likes: 72,
      date: "2013-08-12",
    },
    {
      id: 9275938,
      photographerId: 82,
      title: "Wedding Gazebo",
      image: "Event_WeddingGazebo.jpg",
      likes: 69,
      date: "2018-02-22",
    },
    {
      id: 2053494,
      photographerId: 82,
      title: "Sparkles",
      image: "Event_Sparklers.jpg",
      likes: 2,
      date: "2020-05-25",
    },
    {
      id: 7324238,
      photographerId: 82,
      title: "18th Anniversary",
      image: "Event_18thAnniversary.jpg",
      likes: 33,
      date: "2019-06-12",
    },
    {
      id: 8328953,
      photographerId: 82,
      title: "Wooden sculpture of a horse",
      video: "Art_Wooden_Horse_Sculpture.mp4",
      likes: 24,
      date: "2011-12-08",
    },
    {
      id: 7502053,
      photographerId: 82,
      title: "Triangle Man",
      image: "Art_Triangle_Man.jpg",
      likes: 88,
      date: "2007-05-07",
    },
    {
      id: 8523492,
      photographerId: 82,
      title: "Purple Tunnel",
      image: "Art_Purple_light.jpg",
      likes: 24,
      date: "2018-05-05",
    },
    {
      id: 75902334,
      photographerId: 82,
      title: "Art Mine",
      image: "Art_Mine.jpg",
      likes: 75,
      date: "2019-11-25",
    },
  ];

  // if (numberId === photographerId) {
  //   console.log("data of the photographer");
  // }
  if (data.id === medias.id) {
    console.log("ok ????????????????", numberId);
    return { medias: [...medias] };
  }
}

getDataMedia();

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
/*

***********************************************************************************************
// import { photographerFactory } from "../factories/photographer.js";
// function photographerFactory() {
//   const { name, portrait, price, city, country, tagline, id } = data;
//   function getUserCardDOM() {}
//   return { name, picture, getUserCardDOM };
// }
// photographerFactory();

***********************************************************************************************
*/

//Mettre le code JavaScript lié à la page photographer.html
const apiUrl = "./data/photographers.json";

async function getDataFetched() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(typeof data);
  console.log(data.photographers);
  console.log(data.media);
  console.log(data.photographers[0]);
}

getDataFetched();

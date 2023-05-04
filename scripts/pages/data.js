async function getDataModal() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  const { photographers, media } = await response.json();
  console.log(photographers, media);
  return { photographers, media };
}
// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getDataModal();
//   console.log(photographers);
//   displayData(photographers);
// }

// init();

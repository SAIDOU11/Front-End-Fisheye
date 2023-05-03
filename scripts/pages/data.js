async function getDataModal() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  const { photographers, media } = await response.json();
  console.log(photographers, media);
  return { photographers, media };
}

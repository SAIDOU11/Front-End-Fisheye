getDataModal().then((result) => {
  console.log(result);
  const { photographers } = result;
  console.log(photographers);
  let listPhotographers = photographers.map(
    (photographer) => new Photographer(photographer)
  );
  console.log(listPhotographers);
});

getDataModal().then((result) => {
  console.log(result);
  const { photographers, media } = result;
  console.log(photographers, media);
  let listMedias = media.map((media) => new Media(media));
  console.log(listMedias);
  let listPhotographers = photographers.map(
    (photographer) => new Photographer(photographer)
  );
  console.log(listPhotographers);
});

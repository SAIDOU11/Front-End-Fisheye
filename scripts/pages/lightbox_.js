getDataModal().then((result) => {
  let listMedias = result.map((media) => new Media(media));
  console.log(listMedias);
});

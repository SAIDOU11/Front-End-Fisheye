function photographerFactory(data) {
  const { name, portrait, price, city, country, tagline, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const a = document.createElement("a");
    const a2 = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    a.setAttribute("href", `photographer.html?id=${id}`);
    img.setAttribute("src", picture);
    img.setAttribute("id", id);
    img.setAttribute("alt", name);
    a2.setAttribute("href", `photographer.html?id=${id}`);
    h2.textContent = name;
    h2.setAttribute("alt", name);
    h2.setAttribute("id", id);
    article.appendChild(a);
    a.appendChild(img);
    article.appendChild(a2);
    a2.appendChild(h2);
    const pa1 = document.createElement("p");
    article.appendChild(pa1);
    pa1.textContent = `${city}, ${country}`;
    pa1.setAttribute("class", "city-country");
    const p1 = document.createElement("p");
    article.appendChild(p1);
    p1.textContent = tagline;
    p1.setAttribute("class", "tagline");
    const p = document.createElement("p");
    p.textContent = `${price}€/jour`;
    p.setAttribute("class", "price");
    article.appendChild(p);
    return article;
  }
  return { name, picture, getUserCardDOM };
}

function mediaFactory(dataMedia) {
  const { photographerId, title, image, video, likes } = dataMedia;
  const multimedia = `assets/images/${image}`;
  const multimediaVideo = `assets/images/${video}`;

  function getUserIdWork() {
    console.log("Vidéo", video);
    console.log("Image", image);
    const article = document.createElement("article");
    const divContainer = document.createElement("div");
    const divContent = document.createElement("div");
    const divBanner = document.createElement("div");
    const divTitle = document.createElement("div");
    const paraTitle = document.createElement("p");
    const divLikes = document.createElement("div");
    const numberOfLikes = document.createElement("p");
    const iconLike = document.createElement("i");

    article.appendChild(divContainer);
    divContainer.appendChild(divContent);
    divContainer.appendChild(divBanner);
    divBanner.appendChild(divTitle);
    divBanner.appendChild(divLikes);
    divTitle.appendChild(paraTitle);
    divLikes.appendChild(numberOfLikes);
    divLikes.appendChild(iconLike);

    divContainer.setAttribute("class", "divContainer");
    divContent.setAttribute("class", "divContent");
    divBanner.setAttribute("class", "divBanner");
    divTitle.setAttribute("class", "divTitle");
    divLikes.setAttribute("class", "divLikes");
    iconLike.setAttribute("class", "fa-solid fa-heart");
    divBanner.setAttribute("class", "divBanner");

    paraTitle.textContent = title;
    numberOfLikes.textContent = likes;

    if (image) {
      const a = document.createElement("a");
      const img = document.createElement("img");
      img.setAttribute("src", multimedia);
      img.setAttribute("alt", title);
      divContent.appendChild(a);
      a.appendChild(img);
      img.textContent = image;
    }
    if (video) {
      const videoLink = document.createElement("video");
      videoLink.setAttribute("controls", multimediaVideo);
      const sourceVideo = document.createElement("source");
      sourceVideo.setAttribute("src", multimediaVideo);
      sourceVideo.setAttribute("type", "video/mp4");
      sourceVideo.setAttribute("alt", title);
      divContent.appendChild(videoLink);
      videoLink.appendChild(sourceVideo);
    }

    return article;
  }
  return { photographerId, getUserIdWork };
}

function photographerFactory(data) {
  const { name, portrait, price, city, country, tagline, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const linkPicName = document.createElement("a");
    const headerName = document.createElement("h2");
    const divContainer = document.createElement("div");
    const cityCountry = document.createElement("p");
    const paraTag = document.createElement("p");
    const priceDay = document.createElement("p");

    headerName.innerHTML += `
    <img src=${picture} alt="Photo de profil de ${name}" >
    ${name}
    `;

    article.setAttribute("class", "article");
    linkPicName.setAttribute("href", `photographer.html?id=${id}`);
    linkPicName.setAttribute("title", `Voir la page de ${name}`);
    linkPicName.setAttribute("role", "link");
    linkPicName.setAttribute("target", "blank");
    divContainer.setAttribute("class", "textContainer");
    headerName.setAttribute("class", "headerName");
    priceDay.setAttribute("class", "price");
    cityCountry.setAttribute("class", "city-country");
    paraTag.setAttribute("class", "tagline");

    article.appendChild(linkPicName);
    linkPicName.appendChild(headerName);
    article.appendChild(divContainer);
    divContainer.appendChild(cityCountry);
    divContainer.appendChild(paraTag);
    divContainer.appendChild(priceDay);

    priceDay.textContent = `${price}€/jour`;
    cityCountry.textContent += `${city}, ${country}`;
    paraTag.textContent += `${tagline}`;

    return article;
  }
  const img_header = document.getElementsByClassName("headPicture");
  console.log(img_header);
  return { name, picture, getUserCardDOM };
}

function mediaFactory(dataMedia) {
  const { photographerId, title, image, video, likes } = dataMedia;
  const multimedia = `assets/images/${image}`;
  const multimediaVideo = `assets/images/${video}`;

  function getUserIdWork() {
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
      const picName = document.createElement("a");
      const pictureArt = document.createElement("img");
      picName.setAttribute("href", `*`);
      picName.setAttribute("title", title);
      picName.setAttribute("role", "link");
      picName.setAttribute("aria-label", `Belle image intitulée : ${title} !`);

      pictureArt.setAttribute("src", multimedia);
      pictureArt.setAttribute("alt", `Photo : ${title} `);

      divContent.appendChild(picName);
      picName.appendChild(pictureArt);
      pictureArt.textContent = image;
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

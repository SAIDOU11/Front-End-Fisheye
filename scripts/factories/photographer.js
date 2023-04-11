function photographerFactory(data) {
  const { name, portrait, price, city, country, tagline, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const linkPicName = document.createElement("a");
    const headerName = document.createElement("h2");
    // const picProfil = document.createElement("img");

    // const a2 = document.createElement("a");
    // const pa1 = document.createElement("p");
    // const p1 = document.createElement("p");
    // const p = document.createElement("p");

    article.appendChild(linkPicName);

    linkPicName.setAttribute("href", `photographer.html?id=${id}`);
    linkPicName.setAttribute("title", `Voir la page de ${name}`);
    linkPicName.setAttribute("role", "link");
    linkPicName.setAttribute("target", "blank");

    linkPicName.appendChild(headerName);

    // headerName.setAttribute("alt", name);
    // headerName.setAttribute("id", id);

    // headerName.appendChild(picProfil);

    // picProfil.setAttribute("src", picture);
    headerName.innerHTML += `
    <img src=${picture} alt="Photo de profil de ${name}" >
    ${name}
    `;
    // headerName.textContent += `${name}`;
    // picProfil.setAttribute("id", id);
    // picProfil.setAttribute("alt", name);
    // a2.setAttribute("href", `photographer.html?id=${id}`);

    // pa1.setAttribute("class", "city-country");
    // p1.setAttribute("class", "tagline");

    // article.appendChild(pa1);
    // article.appendChild(p1);

    // article.appendChild(a2);
    // a2.appendChild(h2);

    // h2.textContent = name;
    // pa1.textContent = `${city}, ${country}`;
    // p1.textContent = tagline;

    // article.appendChild(p);
    // p.textContent = `${price}€/jour`;
    // p.setAttribute("class", "price");

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

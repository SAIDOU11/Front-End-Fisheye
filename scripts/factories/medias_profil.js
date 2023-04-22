function photographerFactory(data) {
  const { name, portrait, price, city, country, tagline, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    console.log("Give me something !!!!!!!!!!!!!!!");
    const div = document.createElement("div");
    return div;
  }

  return { name, picture, getUserCardDOM };
}

function mediaFactory(dataMedia) {
  const { date, id, photographerId, title, image, video, likes } = dataMedia;
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
    divContainer.setAttribute("data-id", id);
    divContainer.setAttribute("data-photographers-id", photographerId);
    divContainer.setAttribute("data-publication-date", date);
    divContainer.setAttribute("data-likes", likes);
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

      picName.setAttribute("href", "#");
      picName.setAttribute("title", title);
      picName.setAttribute("role", "link");
      picName.setAttribute("aria-label", `Belle image intitulée : ${title} !`);

      pictureArt.setAttribute("src", multimedia);
      pictureArt.setAttribute("alt", `Photo : ${title} `);
      pictureArt.setAttribute("class", "lightMedia");

      divContent.appendChild(picName);
      picName.appendChild(pictureArt);
      pictureArt.textContent = image;
    }
    if (video) {
      const vidName = document.createElement("a");
      vidName.setAttribute("class", "lightMedia");
      const videoLink = document.createElement("video");
      videoLink.setAttribute("controls", multimediaVideo);
      videoLink.setAttribute("class", "lightMedia");
      const sourceVideo = document.createElement("source");
      sourceVideo.setAttribute("src", multimediaVideo);
      sourceVideo.setAttribute("type", "video/mp4");
      sourceVideo.setAttribute("alt", title);
      divContent.appendChild(vidName);
      vidName.appendChild(videoLink);
      videoLink.appendChild(sourceVideo);
    }

    return article;
  }
  function getDataProfil() {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    div.appendChild(div2);
    console.log("Give me something ?????????????????????????");
    return div;
  }
  return { photographerId, getUserIdWork, getDataProfil };
}

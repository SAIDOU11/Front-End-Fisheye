function photographerFactory(data) {
  const { name, portrait, price, city, country, tagline, id } = data;
  const picture = `assets/photographers/${portrait}`;

  const contactHeader = document.querySelector(".header_color");
  contactHeader.innerHTML = ` <h1>Contactez-moi <br> ${name}</h1>`;

  function getUserCardDOM() {
    const headContainer = document.createElement("div");
    const headBio = document.createElement("div");
    const firstLastName = document.createElement("h2");
    const location = document.createElement("h3");
    const taglinePhotograph = document.createElement("p");

    headContainer.setAttribute("class", "headContainer");

    headBio.setAttribute("class", "headBio");
    firstLastName.setAttribute("class", "firstLastName");
    location.setAttribute("class", "location");
    taglinePhotograph.setAttribute("class", "taglinePhotograph");

    headBio.appendChild(firstLastName);
    headBio.appendChild(location);
    headBio.appendChild(taglinePhotograph);

    firstLastName.textContent = name;
    location.textContent = `${city}, ${country}`;
    taglinePhotograph.textContent = tagline;

    const headBtn = document.createElement("div");
    headBtn.setAttribute("class", "headBtn");
    const button = document.createElement("button");

    button.setAttribute("type", "button");
    button.setAttribute("aria-label", "Bouton pour ouvrir la modale contact");
    button.setAttribute("class", "contact_button button_hover");
    button.setAttribute("onclick", "displayModal()");

    button.textContent = "Contactez-moi";
    headBtn.appendChild(button);

    const headPicture = document.createElement("div");
    headPicture.setAttribute("class", "headPicture");
    const pictureProfil = document.createElement("img");
    pictureProfil.setAttribute("src", picture);
    pictureProfil.setAttribute("alt", `Photo de profil de ${name}`);
    headPicture.appendChild(pictureProfil);

    headContainer.appendChild(headBio);
    headContainer.appendChild(headBtn);
    headContainer.appendChild(headPicture);
    return headContainer;
  }

  return { name, picture, getUserCardDOM };
}

function mediaFactory(dataMedia) {
  const { date, id, photographerId, title, image, video, likes } = dataMedia;

  const multimedia = `assets/images/${image}`;
  const multimediaVideo = `assets/images/${video}`;

  const contactPrice = document.querySelector(".contact_price");
  const divLikes = document.createElement("div");
  const divPriceDay = document.createElement("div");
  contactPrice.appendChild(divLikes);
  contactPrice.appendChild(divPriceDay);

  contactPrice.textContent = `Prixxxxxxxxxxxxxxxx`;

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

    article.setAttribute("onclick", `openLightbox(${id})`);
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
      let lightboxTitle = document.querySelector(".lightboxTitle");
      console.log(lightboxTitle);
      lightboxTitle.textContent = title;
      let imageLightbox = document.querySelector(".imageLightbox");
      console.log(imageLightbox);
      imageLightbox.setAttribute("src", `${multimedia}`);
      const picName = document.createElement("a");
      const pictureArt = document.createElement("img");

      picName.setAttribute("title", title);
      picName.setAttribute("role", "link");
      picName.setAttribute("aria-label", `Belle image intitulée : ${title} !`);

      pictureArt.setAttribute("id", `${id}`);
      pictureArt.setAttribute("src", multimedia);
      pictureArt.setAttribute("alt", `Photo : ${title} `);

      divContent.appendChild(picName);
      picName.appendChild(pictureArt);
      pictureArt.textContent = image;
    }
    if (video) {
      // const videoLink = document.createElement("video");
      // videoLink.setAttribute("controls", multimediaVideo);
      // const sourceVideo = document.createElement("source");
      // sourceVideo.setAttribute("src", multimediaVideo);
      // sourceVideo.setAttribute("type", "video/mp4");
      let videoLightbox = document.querySelector(".videoLightbox");
      videoLightbox.setAttribute("controls", multimediaVideo);
      console.log(videoLightbox);
      const sourceModal = document.createElement("source");
      sourceModal.setAttribute("src", multimediaVideo);
      videoLightbox.setAttribute("src", `${multimediaVideo}`);
      videoLightbox.appendChild(sourceModal);
      let lightboxTitle = document.querySelector(".lightboxTitle");
      console.log(lightboxTitle);
      lightboxTitle.textContent = title;
      // const lightboxTitle = document.querySelector(".lightboxTitle");
      // lightboxTitle.textContent = title;
      // console.log(lightboxTitle);
      const vidName = document.createElement("a");

      // vidName.setAttribute("href", multimediaVideo);

      const videoLink = document.createElement("video");
      videoLink.setAttribute("controls", multimediaVideo);
      const sourceVideo = document.createElement("source");
      sourceVideo.setAttribute("src", multimediaVideo);
      sourceVideo.setAttribute("type", "video/mp4");
      sourceVideo.setAttribute("alt", `Vidéo : ${title}`);
      divContent.appendChild(vidName);
      vidName.appendChild(videoLink);
      videoLink.appendChild(sourceVideo);
    }

    return article;
  }

  // function contentModal() {
  //   const divContentLightbox = document.createElement("div");
  //   const close = document.createElement("button");
  //   const iconX = document.createElement("i");
  //   iconX.setAttribute("class", "fa-solid fa-xmark");
  //   close.appendChild(iconX);
  //   close.setAttribute("class", "closeLightbox ");
  //   close.setAttribute("onclick", "closeModal()");
  //   divContentLightbox.appendChild(close);
  //   const previous = document.createElement("button");
  //   previous.setAttribute("class", "previousLightbox");
  //   const iconPrev = document.createElement("i");
  //   iconPrev.setAttribute("class", "fa-solid fa-chevron-left");
  //   previous.appendChild(iconPrev);
  //   divContentLightbox.appendChild(previous);
  //   const next = document.createElement("button");
  //   next.setAttribute("class", "nextLightbox");
  //   const iconNext = document.createElement("i");
  //   iconNext.setAttribute("class", "fa-solid fa-chevron-right");
  //   next.appendChild(iconNext);
  //   divContentLightbox.appendChild(next);
  //   divContentLightbox.setAttribute("class", "contentLightbox");
  //   console.log(divContentLightbox);
  //   const lightboxMediaContent = document.createElement("div");
  //   lightboxMediaContent.setAttribute("class", "lightboxMediaContent");
  //   const lightboxMedia = document.createElement("div");
  //   divContentLightbox.appendChild(lightboxMediaContent);
  //   lightboxMediaContent.appendChild(lightboxMedia);
  //   lightboxMedia.setAttribute("class", "lightboxMedia");

  //   if (image) {
  //     const imgModal = document.querySelector("#imageLightbox");
  //     console.log(imgModal);
  //     imgModal.textContent += multimedia;
  //     const pictureModal = document.querySelector("imageLightbox");
  //     // pictureModal.setAttribute("class", "imageLightbox");
  //     pictureModal.setAttribute("src", multimedia);
  //     pictureModal.setAttribute("alt", `Photo : ${title} `);
  //     lightboxMedia.appendChild(picName);
  //     picName.appendChild(pictureModal);
  //     pictureModal.textContent = image;
  //   }
  //   if (video) {
  //     const videoModal = document.createElement("video");
  //     videoModal.setAttribute("class", "videoLightBox");
  //     videoModal.setAttribute("controls", multimediaVideo);
  //     // const sourceVideo = document.createElement("source");
  //     // sourceVideo.setAttribute("src", multimediaVideo);
  //     // sourceVideo.setAttribute("class", "dialog-openModal-image");
  //     // sourceVideo.setAttribute("type", "video/mp4");
  //     videoModal.setAttribute("alt", `Vidéo : ${title}`);
  //     // lightboxMediaContent.appendChild(vidName);
  //     lightboxMedia.appendChild(videoModal);
  //     videoModal.textContent = video;
  //   }
  //   console.log("Give me something ?????????????????????????");
  //   const lightboxTitle = document.createElement("p");
  //   lightboxTitle.setAttribute("class", "lightboxTitle");
  //   lightboxTitle.textContent = title;
  //   return;
  // }contentModal
  return { contactPrice, getUserIdWork };
}

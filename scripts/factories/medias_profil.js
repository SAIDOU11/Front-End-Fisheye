function photographerFactory(data) {
  const { name, portrait, price, city, country, tagline, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const contactHeader = document.querySelector(".header_color");

  contactHeader.innerHTML = `Contactez-moi <br> ${name}`;

  const paraPrice = document.querySelector(".paraPrice");
  paraPrice.textContent = `${price}€/jour`;

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

  return { paraPrice, name, picture, getUserCardDOM };
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
    const buttonLikes = document.createElement("button");
    const numberLikes = document.createElement("p");
    const iconLike = document.createElement("i");
    divBanner.setAttribute("tabindex", 0);
    paraTitle.setAttribute("tabindex", 0);
    iconLike.setAttribute("class", "like");
    iconLike.setAttribute("tabindex", 0);

    article.appendChild(divContainer);
    divContainer.appendChild(divContent);
    divContainer.appendChild(divBanner);
    divBanner.appendChild(divTitle);
    divBanner.appendChild(buttonLikes);
    divTitle.appendChild(paraTitle);
    numberLikes.textContent = likes;
    buttonLikes.appendChild(numberLikes);
    buttonLikes.appendChild(iconLike);

    divContainer.setAttribute("class", "divContainer");
    divContainer.setAttribute("data-id", id);
    divContainer.setAttribute("data-title", title);
    divContainer.setAttribute("data-photographers-id", photographerId);
    divContainer.setAttribute("data-publication-date", date);
    divContainer.setAttribute("data-likes", likes);
    divContent.setAttribute("tabindex", 0);
    divContent.setAttribute("class", "divContent");
    divBanner.setAttribute("class", "divBanner");
    divTitle.setAttribute("class", "divTitle");
    buttonLikes.setAttribute("class", "buttonLikes");
    buttonLikes.children[1].addEventListener("click", totalLikes);
    iconLike.setAttribute("class", "fa-solid fa-heart");
    divBanner.setAttribute("class", "divBanner");

    paraTitle.textContent = title;

    if (image) {
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
      const vidName = document.createElement("a");
      const videoLink = document.createElement("video");
      videoLink.setAttribute("id", `${id}`);
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

  function contentModal() {
    const divContentLightbox = document.querySelector(".contentLightbox");
    const lightboxMediaContent = document.querySelector(
      ".lightboxMediaContent"
    );
    const lightboxMedia = document.createElement("div");
    lightboxMedia.setAttribute("class", "lightboxMedia");
    lightboxMedia.setAttribute("id", `${id}`);
    divContentLightbox.appendChild(lightboxMediaContent);
    lightboxMediaContent.appendChild(lightboxMedia);

    if (image) {
      const pictureModal = document.createElement("img");
      pictureModal.setAttribute("class", "imageLightbox");
      pictureModal.setAttribute("src", multimedia);
      pictureModal.setAttribute("alt", `Photo : ${title} `);
      lightboxMedia.appendChild(pictureModal);
    }
    if (video) {
      const videoModal = document.createElement("video");
      videoModal.setAttribute("class", "videoLightBox");
      videoModal.setAttribute("controls", multimediaVideo);
      const sourceLightbox = document.createElement("source");
      sourceLightbox.setAttribute("src", multimediaVideo);
      sourceLightbox.setAttribute("class", "dialog-openModal-image");
      sourceLightbox.setAttribute("type", "video/mp4");
      videoModal.setAttribute("alt", `Vidéo : ${title}`);
      videoModal.appendChild(sourceLightbox);
      lightboxMedia.appendChild(videoModal);
    }
    const lightboxTitle = document.createElement("p");
    lightboxTitle.setAttribute("class", "lightboxTitle");
    lightboxTitle.textContent = title;
    lightboxMedia.appendChild(lightboxTitle);

    return divContentLightbox;
  }

  function totalLikes(e) {
    ++e.currentTarget.parentElement.getElementsByTagName("p")[0].innerHTML;
    let paraLikes = document.querySelector(".paraLikes");
    let newValue = paraLikes.textContent;
    newValue = +newValue;
    paraLikes.textContent = newValue + 1;
  }

  return { getUserIdWork, contentModal };
}

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
    const article = document.createElement("article");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const divTitle = document.createElement("div");
    const p1 = document.createElement("p");
    const iconLike = document.createElement("p");
    const icon = document.createElement("i");
    const numberLikes = document.createElement("p");
    icon.setAttribute("class", "fa-solid fa-heart");
    img.setAttribute("src", multimedia);
    article.appendChild(a);
    article.appendChild(divTitle);
    divTitle.appendChild(p1);
    divTitle.appendChild(iconLike);
    divTitle.appendChild(icon);
    divTitle.appendChild(numberLikes);
    divTitle.setAttribute("class", "divTitle");
    a.appendChild(img);
    img.textContent = image;
    p1.textContent = title;
    iconLike.appendChild(icon);
    numberLikes.textContent += likes;
    console.log(iconLike);
    // icon.textContent = icon;
    return article;
  }
  return { photographerId, getUserIdWork };
}
/*
  <script type="text/javascript">
      const player = new Plyr("video", { captions: { active: true } });

      // Expose player so it can be used from the console
      window.player = player;
    </script>
*/

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

  return { name, picture, getUserCardDOM };
}

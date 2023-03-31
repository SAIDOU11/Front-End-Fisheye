function photographerFactory(data) {
  console.log(data.id);
  const { name, portrait, price, city, country, tagline, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const a = document.createElement("a");
    const img = document.createElement("img");
    a.setAttribute("href", "photographer.html");
    img.setAttribute("src", picture);
    // img.setAttribute("class", "user");
    img.setAttribute("id", id);
    img.setAttribute("alt", name);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("href", "photographer.html");
    h2.setAttribute("alt", name);
    h2.setAttribute("id", id);
    article.appendChild(a);
    a.appendChild(img);
    a.appendChild(h2);
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

// const linkPhotographers = document.getElementById("id");
// linkPhotographers.addEventListener("click", () => {
//   openInNewTab("photographer.html");
// });

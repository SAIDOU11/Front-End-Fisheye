const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select-button");
  const arrow = dropdown.querySelector(".arrow");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    arrow.classList.toggle("arrow-rotate");
    menu.classList.toggle("menu-open");
  });
  // loop options
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      arrow.classList.remove("arrow-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

// function liked(heart) {
//   let countLikes = document.getElementById("clicks");
//   console.log(countLikes);
//   console.log(heart);
//   heart += 1;
//   countLikes.innerHTML = heart;
//   console.log("heart log", heart);
//   console.log(countLikes);
// }

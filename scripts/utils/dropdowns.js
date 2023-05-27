const dropdowns = document.querySelectorAll(".dropdown");
console.log(dropdowns);

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const arrow = dropdown.querySelector(".arrow");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  console.log(options, options.length);

  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    arrow.classList.toggle("arrow-rotate");
    menu.classList.toggle("menu-open");
  });
  // loop options
  options.forEach((option) => {
    option.addEventListener("click", () => {
      console.log("OPTIONS ?? ");
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      arrow.classList.remove("arrow-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        console.log("OPTIONS ?? ");
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

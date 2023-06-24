// const dropdowns = document.querySelectorAll(".dropdown");

// dropdowns.forEach((dropdown) => {
//   const select = dropdown.querySelector(".select");
//   const arrow = dropdown.querySelector(".arrow");
//   const menu = dropdown.querySelector(".menu");
//   const options = dropdown.querySelectorAll(".menu li");
//   const selected = dropdown.querySelector(".selected");
//   // Event select element
//   arrow.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//       select.classList.toggle("select-clicked");
//       arrow.classList.toggle("arrow-rotate");
//       menu.classList.toggle("menu-open");
//     }
//   });
//   select.addEventListener("click", (e) => {
//     console.log(e.target, e);
//     select.classList.toggle("select-clicked");
//     arrow.classList.toggle("arrow-rotate");
//     menu.classList.toggle("menu-open");
//   });
//   // loop options
//   options.forEach((option) => {
//     option.addEventListener("click", () => {
//       console.log(option.innerText);
//       selected.innerText = option.innerText;
//       if (selected.innerText === "Popularité") {
//         console.log("Popularité !!!!!!!!!!!!!!!!");
//       }
//       if (selected.innerText === "Date") {
//         console.log("Date !!!!!!!!!!!!!!!!");
//       }
//       if (selected.innerText === "Titre") {
//         console.log("Titre !!!!!!!!!!!!!!!!");
//       }
//       select.classList.remove("select-clicked");
//       arrow.classList.remove("arrow-rotate");
//       menu.classList.remove("menu-open");
//       options.forEach((option) => {
//         option.classList.remove("active");
//       });
//       option.classList.add("active");
//     });
//   });
// });

// function byTitle(a, b) {
//   // Alphabetically by Title
//   if (a.title > b.title) {
//     return 1;
//   } else if (b.title > a.title) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

function byDate(a, b) {
  // Chronologically by year, month then day
  return new Date(a.date).valueOf() - new Date(b.date).valueOf();
}

function byLikes(a, b) {
  // By popularity
  return parseInt(b.likes) - parseInt(a.likes);
}

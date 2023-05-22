const btn = document.getElementsByClassName("buttonLikes");
console.log(btn);

for (let i = 0; i < btn.length; i++) {
  let button = btn[i];
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
  });
}

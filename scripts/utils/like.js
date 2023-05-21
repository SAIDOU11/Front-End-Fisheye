const btn = document.getElementsByClassName("buttonLikes");
console.log(btn);

for (let i = 0; i < btn.length; i++) {
  let button = btn[i];
  console.log(button);
  button.addEventListener("click", (e) => {
    let btnClicked = e.target;
    console.log(btnClicked);
    let numberOfLikes = btnClicked.parentElement.children[0];
    let newValue = ++like;
    numberOfLikes.innerHTML = newValue;
  });
}

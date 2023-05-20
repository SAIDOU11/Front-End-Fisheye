const btn = document.getElementsByClassName("buttonLikes");

function liked(like) {
  for (let i = 0; i < btn.length; i++) {
    let button = btn[i];
    button.addEventListener("click", (e) => {
      let btnClicked = e.target;
      console.log(btnClicked);
      let numberOfLikes = btnClicked.parentElement.children[0];
      let newValue = ++like;
      numberOfLikes.innerHTML = newValue;
    });
  }
}

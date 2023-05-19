const btn = document.getElementsByClassName("buttonLikes");
console.log(btn);
const likeButton = document.getElementById("like");

function liked(like) {
  for (let i = 0; i < btn.length; i++) {
    let button = btn[i];
    console.log(button);
    button.addEventListener("click", (e) => {
      console.log(e.currentTarget);
      let btnClicked = e.currentTarget;
      let numberOfLikes = btnClicked.children[0];
      console.log(numberOfLikes);
      numberOfLikes = like++;
      console.log(numberOfLikes);
    });
  }
}
//
//     let button = btn[i];
//     // console.log(button);
//     button.addEventListener("click", (e) => {
//       console.log(e.currentTarget);
//       let btnClicked = e.currentTarget;
//       let numberOfLikes = btnClicked.children[0];
//       console.log(numberOfLikes);
//     });
//   }

//Get the modal
const modal = document.getElementById("lightbox");
console.log(modal);

// Get the button that opens the modal
const openModal = document.getElementById("openModal");
console.log(openModal);

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("closeLightbox");
console.log(closeBtn);

// When the user clicks on the button, open the modal
openModal.onclick = function () {
  const modal = document.getElementById("lightbox");
  console.log("Open ?????????????????????");
  modal.style.display = "block";
};

// When the user clicks on <closeBtn> (x), close the modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  const modal = document.getElementById("lightbox");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*
***************************************************************
function displayLightbox() {
//   const modal = document.getElementById("lightbox");
//   modal.style.display = "block";
// }

// function closeLightbox() {
//   const modal = document.getElementById("lightbox");
//   //   const closeBtn = document.getElementsByClassName("close")[0];
//   modal.style.display = "none";
// }

***************************************************************
*/

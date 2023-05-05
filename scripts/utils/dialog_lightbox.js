// Open the Modal

function openLightbox(clicked_id) {
  document.querySelector("#lightbox").style.display = "block";
  console.log("Open ?", clicked_id);
}

// Close the Modal
function closeLightbox() {
  document.querySelector("#lightbox").style.display = "none";
}

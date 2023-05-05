// Open the Modal

function openLightbox(clicked_id, title) {
  document.querySelector("#lightbox").style.display = "block";
  console.log("Open ?", clicked_id);

  document.querySelectorAll(".media_section, .card").forEach((document) => {
    document.addEventListener("click", (e) => {
      console.log("CLICK ??????????");
      // const lightboxTitle = document.querySelector(".lightboxTitle");
      // lightboxTitle.textContent = title;
      lightbox.show(e.currentTarget.dataset.id);
    });
  });
}

// Close the Modal
function closeLightbox() {
  document.querySelector("#lightbox").style.display = "none";
}

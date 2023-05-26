const contactBtn = document.querySelectorAll(".contact_button");

const submitBtn = document.querySelector(".submit_button");

contactBtn.forEach((btn) => btn.addEventListener("click", displayModal));

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  modal.showModal();
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  }
  if (event.key === "Enter") {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((validFirst(), validLast(), validEmail(), validMessage())) {
    modal.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Merci de remplir correctement votre inscription.");
  }
});

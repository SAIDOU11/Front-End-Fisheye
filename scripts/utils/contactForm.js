const contactBtn = document.querySelectorAll(".contact_button");
console.log(contactBtn);

contactBtn.forEach((btn) => btn.addEventListener("click", displayModal));

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const menu = document.querySelector(".navbar__list");
const menuButton = document.querySelector(".navbar__icons");
const overlayBtn = document.querySelector(".overlay");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuButton.classList.toggle("open");
  overlayBtn.classList.toggle("active-overlay");
});
overlayBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuButton.classList.toggle("open");
  overlayBtn.classList.toggle("active-overlay");
});

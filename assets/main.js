// Modal
const buyBtns = document.querySelectorAll(".buy-btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeBtns = document.querySelectorAll(".modal-close");

buyBtns.forEach((item) => item.addEventListener("click", showBuyTicket));
closeBtns.forEach((item) => item.addEventListener("click", hideBuyTicket));
modal.addEventListener("click", hideBuyTicket);

function showBuyTicket() {
  modal.classList.add("open");
}

function hideBuyTicket() {
  modal.classList.remove("open");
}

modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Bars
const nav = document.querySelector(".nav");
const menu = document.querySelector(".bars");
const header = document.querySelector(".header");

menu.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

document.addEventListener("click", function (event) {
  if (!nav.contains(event.target) && !header.contains(event.target)) {
    nav.classList.remove("nav-open");
  }
});

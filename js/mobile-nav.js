const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".nav");
const mobileNavBtnIcon = document.querySelector(".mobile-nav-btn__icon");
const mobileNavLinks = document.querySelectorAll(".nav__list-link");

mobileNavBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("nav--opened");
  document.body.classList.toggle("no-scroll");

  if (mobileNav.classList.contains("nav--opened")) {
    mobileNavBtnIcon.src = "./img/icons/close-menu-icon.svg";
  } else {
    mobileNavBtnIcon.src = "./img/icons/open-menu-icon.svg";
  }
});

mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("nav--opened");
    document.body.classList.remove("no-scroll");
  });
});

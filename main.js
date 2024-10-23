/**
 * navigation buttons listener
 */

const buttons = document.querySelectorAll(".navigation__buttons-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

/**
 * pagination buttons listener
 */

const pagination = document.querySelectorAll(
  ".all-customers__bottom-pagination-button"
);

pagination.forEach((p_button) => {
  p_button.addEventListener("click", function () {
    pagination.forEach((btn) => btn.classList.remove("selected"));
    this.classList.add("selected");
  });
});

/**
 * Burger menu listener
 */
const burgerMenu = document.getElementById("burger-menu");
const asideNav = document.getElementById("navigation");
const closeNavBtn = document.getElementById("nav-close");

if (burgerMenu && asideNav) {
  burgerMenu.addEventListener("click", () => {
    asideNav.classList.add("open");
  });
}

if (closeNavBtn && asideNav) {
  closeNavBtn.addEventListener("click", () => {
    asideNav.classList.remove("open");
  });
}

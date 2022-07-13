/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== SHOW CART ===============*/
const cartIcon = document.getElementById("cart-shop");
const cartClose = document.querySelector(".cart__close");
const cart = document.getElementById("cart");

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartIcon) {
  cartIcon.addEventListener("click", showCart);
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", closeCart);
}

function showCart() {
  cart.classList.add("show-cart");
}
function closeCart() {
  cart.classList.remove("show-cart");
}

/*=============== SHOW LOGIN ===============*/
const loginIcon = document.getElementById("login-toggle");
const loginClose = document.getElementById("login-close");
const loginTab = document.getElementById("login");

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginIcon) {
  loginIcon.addEventListener("click", openLogin);
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
  loginClose.addEventListener("click", closeLogin);
}

function openLogin() {
  loginTab.classList.add("show-login");
}

function closeLogin() {
  loginTab.classList.remove("show-login");
}

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
  // spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  //   grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/*=============== ADD TO SHOPPING CART ===============*/

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach(function (item) {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", function () {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== STYLE SWITCHER ===============*/

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
const nav = document.querySelector('.nav');
const header = document.querySelector(".header");

const loginIcon = document.getElementById("login-toggle");
const loginClose = document.getElementById("login-close");
const loginTab = document.getElementById("login");
const cartIcon = document.getElementById("cart-shop");
const cartClose = document.querySelector(".cart__close");
const cart = document.getElementById("cart");
const cartContainer = document.querySelector('.cart__container')
const cartPricesTotalEl = document.querySelector('.cart__prices-total');
const cartsPricesItemsEl = document.querySelector('.cart__prices-item')

const newArrival = document.querySelector('.new__container');
// console.log(newArrival)

// Cookies message
const cookieMessage = document.createElement('div')
cookieMessage.innerHTML = `We use cookies for improved functionality and analytics.
    <button class="btn btn--close-cookie">Got it</button>`;
cookieMessage.classList.add('cookie-message');
cookieMessage.style.backgroundColor = '#37383d';
cookieMessage.style.width = '120%';
cookieMessage.style.height = Number.parseFloat(getComputedStyle(cookieMessage).height) + 30 + 'px';
 header.append(cookieMessage)   




// All function declarations
const removeItem = () => {

}



// Handles all events on the Main Navigation
nav.addEventListener('click', function(e){
  const target = e.target;

  //giving the nav elements a common class
  if (!target.classList.contains('gen')) return;
  // User-login
  if(target.classList.contains('login-user')){
    loginTab.classList.add("show-login");
  }
  // Nav menu
  if (target.classList.contains('nav-user')){
    navMenu.classList.add('show-menu')
  }
  if(target.classList.contains('close-nav')){
    navMenu.classList.remove('show-menu')
  }
//  Cart
  if (target.classList.contains('shop')){
    cart.classList.add('show-cart')
  }
})

/*=============== Remove from view ===============*/

/*===== CART HIDDEN =====*/
if (cartClose){
  cartClose.addEventListener('click', function (e){
    cart.classList.remove('show-cart')
  })
}

/*===== LOGIN HIDDEN =====*/
if (loginClose) {
  loginClose.addEventListener("click", function(){
    loginTab.classList.remove("show-login");
  });
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


/*=============== ADD TO SHOPPING CART ===============*/
const total = [];
let newTotal = 0;
cartContainer.innerHTML = '';
cartPricesTotalEl.textContent = 0;
let itemsCounter = 0;
//Adding event-listener to common parent El
//
if (newArrival){
    newArrival.addEventListener('click', function (e){
        e.preventDefault()
        const target = e.target;
        if (!target.classList.contains('new__icon')) return;
        const parentEl = target.parentElement.parentElement;
        const targetImg = parentEl.querySelector('.new__img').getAttribute('src')
        const targetPrice = parentEl.querySelector('.new__price').innerText
        const targetTag = parentEl.querySelector('.new__title').innerText;
        addItemToCart(targetTag, targetPrice, targetImg)





        const priceToNum = targetPrice.replace('$', '');
        total.push(parseFloat(priceToNum))
        newTotal = parseFloat(total.reduce((acc, cur) => acc + cur, 0).toFixed(2))
        itemsCounter++
        cartPricesTotalEl.textContent = `$ ${newTotal}`
        cartsPricesItemsEl.textContent = `${itemsCounter} ${itemsCounter === 1 ? 'item' : 'items'}`

        console.log(typeof newTotal)

    },)

}

function addItemToCart(title, price, imageSrc){

  const html = `
                <article class="cart__card">
                <div class="cart__box">
                    <img src= ${imageSrc}  alt="" class="cart__img">
                </div>

                <div class="cart__details">
                    <h3 class="cart__title">${title}</h3>
                    <span class="cart__price">${price}</span>


                <div class="cart__amount">
                    <div class="cart__amount-content">
                        <span class="cart__amount-box">
                            <i class="fas fa-minus decrease event-target"></i>
                        </span>

                        <span class="cart__amount-number">1</span>

                        <span class="cart__amount-box">
                            <i class="fas fa-plus increase event-target"></i>
                        </span>

                        </div>

                        <i class="fas fa-trash-alt cart__amount-trash event-target"></i>
                    </div>
                </div>

            </article>
  `

  cartContainer.insertAdjacentHTML('afterbegin', html);

}

// Removing items from Cart
let cartQuantity = 1;
cartContainer.addEventListener('click', function (e){
    const target = e.target;

    // const parentEl = target.parentElement.parentElement.parentElement

  // const priceEl = parentEl.querySelector('.cart__price').innerText;
  //   console.log(priceEl)
  // const itemQuantity = parseFloat(parentEl.querySelector('.cart__amount-number').innerText)
  // const priceToNum = parseFloat(priceEl.replace('$', ''));
  // console.log(itemQuantity, priceToNum)


  if (!target.classList.contains('event-target')) return;


      if (target.classList.contains('increase')){
          const parentEl = target.parentElement.parentElement.parentElement.parentElement.parentElement
          const priceEl =   parentEl.querySelector('.cart__price');
           let itemQuantityEl = parentEl.querySelector('.cart__amount-number');
           // itemQuantity++;
          cartQuantity++;

          const priceNum = parseFloat((parentEl.querySelector('.cart__price').innerText)
              .replace('$', ''));

          // console.log(priceNum, itemQuantity)
          itemQuantityEl.innerText = cartQuantity;
          priceEl.innerText = `$${increaseQuantity(14.99, cartQuantity)}`;
      }

      if (target.classList.contains('decrease')){

      }

    if (target.classList.contains('cart__amount-trash')){

        parentEl.remove()


        console.log(typeof priceEl)
        let totalPrice = parseFloat(newTotal).toFixed(2)
        totalPrice -= priceToNum.toFixed(2)

        cartPricesTotalEl.textContent = `$${totalPrice.toFixed(2)}`


        itemsCounter--;

        // cartPricesTotalEl.textContent = `$ ${newTotal}`
        cartsPricesItemsEl.textContent = `${itemsCounter} ${itemsCounter === 1 ? 'item' : 'items'}`
    }


})

function increaseQuantity (price, quantity) {
  return (price * quantity).toFixed(2)
}

function decreaseQuantity(){

}

/*=============== STYLE SWITCHER ===============*/

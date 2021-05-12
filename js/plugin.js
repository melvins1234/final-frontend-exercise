//#region Header and Footer Functionalities
let window_width = window.innerWidth;


if(document.querySelector(".header__main-nav--toggle")){
    let toggleBtn = document.querySelector(".header__main-nav--toggle"),
        navBar    = document.querySelector(".header__nav-bar");

    toggleBtn.addEventListener("click", function(){
        if(navBar.classList.contains("header__nav-bar--show")){
            navBar.classList.remove("header__nav-bar--show");
        }else{
            navBar.classList.add("header__nav-bar--show");
        }
    });
}

if(document.querySelector(".header__main-nav--carret")){
    let hasDropDown = document.querySelector(".header__main-nav--carret");
    hasDropDown.addEventListener("click", function(){
        if(this.nextElementSibling.classList.contains("header__mega-menu--show")){
            this.nextElementSibling.classList.remove("header__mega-menu--show");
        }else{
            this.nextElementSibling.classList.add("header__mega-menu--show")
        }
    
        if(this.firstChild.classList.contains("fa-caret-down")){
            this.firstChild.classList.remove("fa-caret-down");
            this.firstChild.classList.add("fa-caret-up");
        }else{
            this.firstChild.classList.add("fa-caret-down");
            this.firstChild.classList.remove("fa-caret-up");
        }
    
    });
}


function removeMenuTabEvents(){
    if(document.querySelectorAll(".header__nav-bar ul li a")){
        menuTabs = document.querySelectorAll(".header__nav-bar ul li a");
        for (let index = 0; index < menuTabs.length; index++) {
            menuTabs[index].removeAttribute("onmouseover");
        }
    }

}

if(window_width <= 991){
    removeMenuTabEvents();
}

let counter = 1;

window.onresize = function(event){
    window_width = window.innerWidth; 
    if(window_width <= 991){
        removeMenuTabEvents();
    }

    // if(document.querySelector(".breadcrumbs__tab--active")){
    //     let breadcrumbs__tab = document.querySelector(".breadcrumbs__tab--active");
    //     const li_width = breadcrumbs__tab.clientWidth;
    //     if(window_width <= 480){
    //         breadcrumbs__tab.style.width = `${li_width - counter}px`;
    //     }else{
    //         counter = 1;
    //         breadcrumbs__tab.style.width = `${li_width}px`;
    //     }
    //     counter++;
    // console.log(li_width - counter);

    // }
}


if(document.querySelector(".footer__middle--site-map")){
    let footerTab = document.getElementsByClassName("footer__middle--site-map");
    for (let index = 0; index < footerTab.length; index++) {
        footerTab[index].addEventListener("click", function(){
            if(this.classList.contains("footer__arrow")){
                this.classList.remove("footer__arrow");
                this.lastElementChild.classList.remove("footer__nav--show");
            }else{
                this.classList.add("footer__arrow");
                this.lastElementChild.classList.add("footer__nav--show");
            }

        });
    }

}

//#endregion

//#region Quantity Function

var cartObj = [
    {'product_id': 'c04297141','product_image': 'c04297141.png', 'product_title': 'Philips Hue 7W BR30 Connected Downlight Lamp', 'product_price': 499, 'product_quantity': 2},
    {'product_id': 'macbook-pro','product_image': 'macbook-pro.png', 'product_title': 'Apple MacBook Pro', 'product_price': 499, 'product_quantity': 2}
]

// Put the object into storage
localStorage.setItem('cartObj', JSON.stringify(cartObj));



JSON.parse(localStorage.getItem('cartObj')).forEach(element => {
    let cartList = document.querySelector('.cart-section'),
        div = document.createElement('div');

        div.classList.add('cart-section__table-row');
        div.setAttribute('id', element.product_id);
        div.innerHTML = `<div class="cart-section__table-row--product">
        <button class="cart-section__table-row--product--cancel-item-btn"><i class="fas fa-times"></i></button>
        <img src="images/${element.product_image}">
        ${element.product_title}
    </div>
    <div class="cart-section__table-row--unit-price"><span class="cart-section__table-row--unit-price--label">Unit Price</span>${element.product_price}</div>
    <div class="cart-section__table-row--qty">
        <button class="cart-section__table-row--qty--minus-btn" id="qty-minus-btn">-</button>
        <div class="cart-section__table-row--qty--number">${element.product_quantity}</div>
        <button class="cart-section__table-row--qty--plus-btn" id="qty-plus-btn">+</button>
    </div>
    <div class="cart-section__table-row--price"><span class="cart-section__table-row--price--label">Price</span>$998</div>`;

        cartList.appendChild(div)

    console.log(element.product_image);
});

// Retrieve the object from storage

    const remainQuantity = 20;
    document.addEventListener("click", function(e){
        let prod_quantity = e.target.previousElementSibling;
        if(e.target.id.split(' ').indexOf("qty-plus-btn") >- 1){
            if(parseInt(e.target.previousElementSibling.textContent, 10) !== remainQuantity )
                e.target.previousElementSibling.textContent = parseInt(e.target.previousElementSibling.textContent, 10) + 1;

            console.log(e.target);
            if(document.querySelectorAll(".cart-section__table-row--price")){
                e.target.parentElement.nextElementSibling.textContent = `$${parseInt(e.target.previousElementSibling.textContent, 10) * 499}`
            }

        }else if(e.target.id.split(' ').indexOf("qty-minus-btn") >- 1){
            if(parseInt(e.target.nextElementSibling.textContent, 10) > 1)
                e.target.nextElementSibling.textContent = parseInt(e.target.nextElementSibling.textContent, 10) - 1
        }else if(hasClass(e.target, "cart-section__table-row--product--cancel-item-btn"))
            e.target.parentElement.parentElement.remove();

    });

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
//#endregion




if(document.querySelectorAll(".main__product--select_color span")){
    let colors = document.querySelectorAll(".main__product--select_color span"),
        imageBg = document.querySelector(".main__product--image--big");
    for (let index = 0; index < colors.length; index++) {
        colors[index].addEventListener("click", function(){
            imageBg.src = `images/beats__${this.classList.toString().substring(15)}.png`;
        });    
    }
}

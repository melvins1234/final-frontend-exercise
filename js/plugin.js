let subtotalPrice = document.querySelector("#cart-section__subtotal"),
totalPrice = document.querySelector("#cart-section__total"),
total_items = document.querySelector(".header__top--cart-items");
cart_total_price = document.querySelector(".header__top--cart-price");

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

var cartObj = [];
//     {'product_id': 'c04297141','product_image': 'c04297141.png', 'product_title': 'Philips Hue 7W BR30 Connected Downlight Lamp', 'product_price': 499, 'product_quantity': 2}
// ]

// Put the object into storage

if(JSON.parse(localStorage.getItem('cartObj'))){
    JSON.parse(localStorage.getItem('cartObj')).forEach(e => {
        cartObj.push(e);
    });   
    totalItems();
    cartTotalPrice();
}




document.addEventListener('click', function(e){
    if(hasClass(e.target, 'bottom1__card__add-to-cart')){

        if(cartObj){
            var checkExist = cartObj.find(function(post, index){
                if(post.product_id === e.target.offsetParent.offsetParent.offsetParent.offsetParent.querySelector('.bottom1__card__image').getAttribute('src').replace('images/',''))
                    return true;
            });
        }

        if(checkExist){
            checkExist.product_quantity = parseInt(checkExist.product_quantity) + 1;
        }else{
            cartObj.push(
                {'product_id': e.target.offsetParent.offsetParent.offsetParent.offsetParent.querySelector('.bottom1__card__image').getAttribute('src').replace('images/',''),
                'product_image': e.target.offsetParent.offsetParent.offsetParent.offsetParent.querySelector('.bottom1__card__image').getAttribute('src').replace('images/',''), 
                'product_title': e.target.offsetParent.offsetParent.offsetParent.offsetParent.querySelector('.bottom1__card__title').textContent, 
                'product_price': e.target.offsetParent.offsetParent.offsetParent.offsetParent.querySelector('.bottom1__card__price').textContent.replace('$',''), 
                'product_quantity': 1}
            );
        }

        localStorage.setItem('cartObj', JSON.stringify(cartObj));
        totalItems();
        cartTotalPrice();
    }
});


if(localStorage.getItem('cartObj')){
    JSON.parse(localStorage.getItem('cartObj')).forEach(element => {
        if(document.querySelector('.cart-section__product-list')){
            let cartList = document.querySelector('.cart-section__product-list'),
            div = document.createElement('div');
    
            div.classList.add('cart-section__table-row');
            div.setAttribute('id', element.product_id);
            div.innerHTML = 
            `<div class="cart-section__table-row--product">
                <button class="cart-section__table-row--product--cancel-item-btn"><i class="fas fa-times"></i></button>
                <img src="images/${element.product_image}">${element.product_title}
            </div>
            <div class="cart-section__table-row--unit-price">
                <span class="cart-section__table-row--unit-price--label">Unit Price</span>${element.product_price}
            </div>
            <div class="cart-section__table-row--qty">
                <button class="cart-section__table-row--qty--minus-btn" id="qty-minus-btn">-</button>
                <div class="cart-section__table-row--qty--number">${element.product_quantity}</div>
                <button class="cart-section__table-row--qty--plus-btn" id="qty-plus-btn">+</button>
            </div>
            <div class="cart-section__table-row--price">
                <span class="cart-section__table-row--price--label">Price</span>
                <span class="cart-section__table-row--price--label-price">$${element.product_quantity * element.product_price}</span>
            </div>`;
    
            cartList.appendChild(div);
    
            subtotalPrice.textContent = `$ ${subtotal().subtotal}`;
            totalPrice.textContent = `$ ${subtotal().totalPrice}`;
        }
    });
}

// Retrieve the object from storage

const remainQuantity = 20;
document.addEventListener("click", function(e){
    if(cartObj){
        var checkExist = cartObj.find(function(post, index){
            if(post.product_id === e.target.parentElement.parentElement.getAttribute('id'))
                return true;
        });
    }

    if(e.target.id.split(' ').indexOf("qty-plus-btn") >- 1){
        let prod_quantity = e.target.previousElementSibling,
            prod_price = e.target.parentElement.nextElementSibling.lastElementChild;

        if(parseInt(prod_quantity.textContent, 10) !== remainQuantity && checkExist){
            prod_quantity.textContent = parseInt(prod_quantity.textContent, 10) + 1;
            checkExist.product_quantity = parseInt(checkExist.product_quantity) + 1;
        }
        if(document.querySelectorAll(".cart-section__table-row--price--label-price"))
            prod_price.textContent = `$${parseInt(prod_quantity.textContent, 10) * parseFloat(e.target.parentElement.parentElement.querySelector(".cart-section__table-row--unit-price").textContent.replace('Unit Price', ''))}`

        subtotalPrice.textContent = `$ ${subtotal().subtotal}`;
        totalPrice.textContent = `$ ${subtotal().totalPrice}`;
        cart_total_price.textContent = `$ ${subtotal().totalPrice}`;

        localStorage.setItem('cartObj', JSON.stringify(cartObj));

    }else if(e.target.id.split(' ').indexOf("qty-minus-btn") >- 1){
        let prod_quantity = e.target.nextElementSibling,
            prod_price = e.target.parentElement.nextElementSibling.lastElementChild;

        if(parseInt(prod_quantity.textContent, 10) > 1 && checkExist){
            prod_quantity.textContent = parseInt(prod_quantity.textContent, 10) - 1
            checkExist.product_quantity = parseInt(checkExist.product_quantity) - 1;

            if(document.querySelectorAll(".cart-section__table-row--price--label-price"))
                prod_price.textContent = `$${parseInt(prod_quantity.textContent, 10) * parseFloat(e.target.parentElement.parentElement.querySelector(".cart-section__table-row--unit-price").textContent.replace('Unit Price', ''))}`
        }
        subtotalPrice.textContent = `$ ${subtotal().subtotal}`;
        totalPrice.textContent = `$ ${subtotal().totalPrice}`;
        cart_total_price.textContent = `$ ${subtotal().totalPrice}`;

        localStorage.setItem('cartObj', JSON.stringify(cartObj));

    }else if(hasClass(e.target, "cart-section__table-row--product--cancel-item-btn")){
        e.target.parentElement.parentElement.remove();
        subtotalPrice.textContent = `$ ${subtotal().subtotal}`;
        totalPrice.textContent = `$ ${subtotal().totalPrice}`;
        cart_total_price.textContent = `$ ${subtotal().totalPrice}`;

        cartObj = cartObj.filter(item => item.product_id != e.target.parentElement.parentElement.getAttribute('id'));
        localStorage.setItem('cartObj', JSON.stringify(cartObj));

        total_items.textContent =  `${cartObj.length} Items`
    }

});

function subtotal(){
    let subtotalPrice = document.querySelectorAll('.cart-section__table-row--price--label-price'), 
        shipping = parseFloat(document.querySelector("#cart-section__shipping").textContent.replace('$', '')),
        obj = {},
        total = 0.00;
    subtotalPrice.forEach(element =>{
         total += parseFloat(element.textContent.replace('$',''));
    });

    obj.subtotal = total.toFixed(2);
    obj.totalPrice = (parseFloat(total) + shipping).toFixed(2);

    return obj;
}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

function totalItems(){
    if(total_items && JSON.parse(localStorage.getItem('cartObj')))
        total_items.textContent = `${JSON.parse(localStorage.getItem('cartObj')).length} Items`; 
}

function cartTotalPrice(){
    let total = 0;
    if(cart_total_price && JSON.parse(localStorage.getItem('cartObj'))){
        JSON.parse(localStorage.getItem('cartObj')).forEach( e => {
            total = parseFloat(total) + (parseFloat(e.product_quantity) * parseFloat(e.product_price));
        })
    }   
    cart_total_price.textContent = `$ ${(total + 20).toFixed(2)}`;
    
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

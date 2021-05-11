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

window.onresize = function(event){
    var window_width = window.innerWidth; 
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
if(document.getElementById("qty-plus-btn") && document.getElementById("qty-minus-btn")){
    let plus_btn = document.getElementById("qty-plus-btn"),
        minus_btn = document.getElementById("qty-minus-btn"),
        prod_quantity = plus_btn.previousElementSibling;

    plus_btn.addEventListener("click", function(){
        prod_quantity.textContent = parseInt(prod_quantity.textContent, 10) + 1;
    });

    minus_btn.addEventListener("click", function(){
        if(parseInt(prod_quantity.textContent, 10) > 1)
            prod_quantity.textContent = parseInt(prod_quantity.textContent, 10) - 1
    });
    
}
//#endregion
let points = document.querySelectorAll('.breadcrumbs__nav ul li:last-child');

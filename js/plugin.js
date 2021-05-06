var toggleBtn = document.querySelector(".header__main-nav--toggle"),
    navBar    = document.querySelector(".header__nav-bar"),
    hasDropDown = document.querySelector(".header__main-nav--carret"),
    menuTabs = document.querySelectorAll(".header__nav-bar ul li a"),
    window_width = window.innerWidth;

    console.log(hasDropDown);

toggleBtn.addEventListener("click", function(){
    if(navBar.classList.contains("header__nav-bar--show")){
        navBar.classList.remove("header__nav-bar--show");
    }else{
        navBar.classList.add("header__nav-bar--show");
    }
});

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

function removeMenuTabEvents(){
    for (let index = 0; index < menuTabs.length; index++) {
        menuTabs[index].removeAttribute("onmouseover");
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

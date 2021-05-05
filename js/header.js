
var delayInProgress = false,
    closeBtnModal = document.querySelector('.modal__close');

    console.log(closeBtnModal);

closeBtnModal.addEventListener("click", function(){
    this.parentElement.parentElement.style.display = "none";
});

function moveArrow(xMove) {
    var arrowElement = document.getElementById("main-nav-arrow");
    displayHeaderDropDownMenu();
    arrowElement.style.left = xMove;
    
}
function displayHeaderDropDownMenu(){
    if(delayInProgress=true){
        clearTimeout(hideDelay);
    }
    var arrowElement = document.getElementById("main-nav-arrow");
    arrowElement.style.display = "block";
    var headerDropDownMenu = document.getElementsByClassName("header__drop-down-nav");
    headerDropDownMenu[0].style.display = "Flex";

    document.addEventListener('mouseup', function(e) {
    //var headerDropDownMenu2 = document.getElementsByClassName("header__drop-down-nav");
        if (!headerDropDownMenu[0].contains(e.target)) {
            headerDropDownMenu[0].style.display = 'none';
            arrowElement.style.display = "none";
        }
    });
}
function hideHeaderDropDownMenu(){
    delayInProgress = true;
    var delay = setTimeout(hideNow(), 2000);
    function hideNow(){
    var headerDropDownMenu = document.getElementsByClassName("header__drop-down-nav");
    headerDropDownMenu[0].style.display = "none";
    var arrowElement = document.getElementById("main-nav-arrow");
    arrowElement.style.display = "none";
    delayInProgress = false;
    }
}

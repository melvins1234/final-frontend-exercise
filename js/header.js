// Modal close 
if(document.querySelector('.modal__close')){
    var closeBtnModal = document.querySelector('.modal__close');
    console.log(closeBtnModal);
    closeBtnModal.addEventListener("click", function(){
        this.parentElement.parentElement.style.display = "none";
    });
}

// Initialize global variables
var delayInProgress;
var arrowElement;
var headerDropDownMenu;
var delayTimeOut;

delayInProgress = false;
arrowElement = document.getElementById("main-nav-arrow");
headerDropDownMenu = document.getElementsByClassName("header__drop-down-nav");
console.log("initialized")

/* if script is still loading try this:
** (needs onload property on body tag)
function onBodyTagLoad(){
    delayInProgress = false;
    arrowElement = document.getElementById("main-nav-arrow");
    headerDropDownMenu = document.getElementsByClassName("header__drop-down-nav");
}
*/

// move arrow triange to corresponding nav link
function moveArrow(xMove) {
    arrowElement.style.left = xMove;
    displayHeaderDropDownMenu();
}

// Display header drop down menu
function displayHeaderDropDownMenu(){
    if(delayInProgress=true){
        clearTimeout(delayTimeOut);
    }
    arrowElement.style.display = "block";
    headerDropDownMenu[0].style.display = "Flex";

    // Hide drop down menu nav when clicking outside div
    document.addEventListener('mouseup', function(e) {
        if (!headerDropDownMenu[0].contains(e.target)) {
            hideHeaderDropDownMenuNow();
        }
    });
}

// delay hide for header drop down menu onMousOut and nav link onMouseOut
function slowlyHideHeaderDropDownMenuNow(){
    if(delayInProgress=true){
        clearTimeout(delayTimeOut);
    }
    delayInProgress = true;
    delayTimeOut = setTimeout(hideHeaderDropDownMenuNow, 1500);
}

// hide header drow down menu and arrow element
function hideHeaderDropDownMenuNow(){
    headerDropDownMenu[0].style.display = "none";
    arrowElement.style.display = "none";
}
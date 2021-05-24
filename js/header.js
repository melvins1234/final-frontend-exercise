// Modal close 
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

var modalElement = ` 
<section class="modal__box">
    <span class="modal__close"><i class="fas fa-times"></i></span>
    <article class="modal__content">
        <article class="modal__content--inner">
            <h3 class="modal__title">Newsletter</h3>
            <p class="modal__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <section class="bottom4__search modal__sub">
                <input type="text" name="email" id="email" placeholder="Email">
                <a href="#" class="bottom4__btn">Subscribe</a>
            </section>
         </article>
         <footer class="modal__unsub">
            <input type="checkbox" name="pop-up" id="pop-up" class="modal__checkbox" checked>
            <label for="pop-up" class="modal__label">Don’t show this popup again</label>
        </footer>
    </article>

    <img class="modal__img" src="images/newsletter-img.png" alt="Gift">
</section>`;

if(!sessionStorage.getItem('isModalClose')){
    let section = document.createElement('section'),
        modalInsertAfter = document.querySelector('.modal__insert');
    section.id = 'modal';
    section.classList = 'modal';
    section.innerHTML = modalElement;

    if(modalInsertAfter)
        insertAfter(section, modalInsertAfter);
}

if(document.querySelector('.modal__close')){
    
    var closeBtnModal = document.querySelector('.modal__close');
    closeBtnModal.addEventListener("click", function(){
        this.parentElement.parentElement.remove();

        sessionStorage.setItem('isModalClose', false);

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
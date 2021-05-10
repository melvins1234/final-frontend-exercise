var score; 
var grade;
function assignGrade(score){
    if(score>=80){grade = "A";}
    else if(score<80 && score>=60){ grade = "B";}
    else if(score<60 && score>=40){ grade = "C";}
    else if(score<40 && score>=20){ grade = "D";}
    else if(score<20 && score>=0){ grade = "F";}
    return grade;
}

function displayGrade(){
    console.log("You got a/an "+assignGrade(80)+" grade.");
}

displayGrade();

var getID = document.getElementById('main-nav-arrow');
var getClassName =  document.getElementsByClassName('header__drop-down-nav__accessories-1');
var getQuery = document.querySelector('#color-pick-blue');
var getQueryAll = document.querySelectorAll('li, a');
console.log(getQueryAll);
var changeBGColor = document.getElementsByClassName('product-listing__filter--brand');

changeBGColor[0].style.background = "orange";

var hola = document.createElement('div');
hola.textContent = "hola";
getQuery.appendChild(hola);
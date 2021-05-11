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
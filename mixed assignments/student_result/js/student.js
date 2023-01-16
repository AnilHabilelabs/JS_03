// 16.	Display the result of a student according to the obtained percentage of 5 subjects.

// 	int hindi = parseInt(Math.random() * 100);
// 	int english = parseInt(Math.random() * 100);
// 	int sanskrit = parseInt(Math.random() * 100);
// 	int maths = parseInt(Math.random() * 100);
// 	int science = parseInt(Math.random() * 100);
	
// 	1. calculate total marks, percentage
// 	2. Display result according to the obtained percentage.

var hindi = parseInt(Math.random() * 100);
var english = parseInt(Math.random() * 100);
var sanskrit = parseInt(Math.random() * 100);
var maths = parseInt(Math.random() * 100);
var science = parseInt(Math.random() * 100);
function studentResult(hindi,english,sanskrit,maths,science) {
    var total_marks = hindi+english+sanskrit+maths+science;
    var total_percentage = total_marks/5;
    var grade = null;
    if(total_percentage>=90){
        grade="A++";
    }
    else if(total_percentage>=80){
        grade="A+";
    }
    else if(total_percentage>=70){
        grade="A";
    }
    else if(total_percentage>=60){
        grade="B";
    }
    else if(total_percentage>=50){
        grade="C";
    }
    else if(total_percentage>=42){
        grade="D";
    }
    else if(total_percentage>=33){
        grade="E";
    }
    else{
        grade="F";
    }
    console.log(`student score ${hindi} in Hindi`);
    console.log(`student score ${english} in English`);
    console.log(`student score ${sanskrit} in Sanskrit`);
    console.log(`student score ${maths} in Maths`);
    console.log(`student score ${science} in Science`);
    console.log("---------------------------------------");
    console.log("Total Marks Student Obtained : ",total_marks);
    console.log("Total Percentage Student Obtained : ",total_percentage+"%");
    console.log("Grade Obtained By the Student",grade)
}
studentResult(hindi,english,sanskrit,maths,science);
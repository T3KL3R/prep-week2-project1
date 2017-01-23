/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.
var feelings;
feelings = "Groovy!"
document.getElementById("q2").innerHTML=feelings;


// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name,message;
name = "Josh";
message = " is feeling groovy";
document.getElementById("q3").innerHTML = name + message;



// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var num1,num2;
num1=5;
// math.random()*10;
num2=12;
addResult = num1 + num2;
subtractResult = num1 - num2;
multiplyResult = num1 * num2;
divideResult = num2 / num1;
document.getElementById("q4a").innerHTML = "Adding both variables results in "+addResult;
document.getElementById("q4b").innerHTML = "Subtracting the second variable from the first results in "+subtractResult;
document.getElementById("q4c").innerHTML = "Multiplying both variables results in "+multiplyResult;
document.getElementById("q4d").innerHTML = "Dividing the second variables by the first results in "+divideResult;




// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var string1, string2, stringCon;
string1 = "And";
string2 = "then";
stringCon= string1 + " " + string2;
document.getElementById("q5").innerHTML = stringCon;



// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.

document.getElementById('q6a').innerHTML = '5' + 3;
document.getElementById('q6b').innerHTML = '5' - '3';
document.getElementById('q6c').innerHTML = '5' * '3';
document.getElementById('q6d').innerHTML = '4' / '2';
document.getElementById('q6note').innerHTML = "JavaScript will assume + operator is being used for concatenation if a string is involved. Other operators it will apply math for.";




// 7. When a button is clicked, add content into the ID "q7".

document.getElementById("callAlert").addEventListener("click", function() {
  document.getElementById("q7").innerHTML = "You clicked the button. Couldn't help yourself, huh?";
});



// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.

var valueToDouble;
document.getElementById("callDoubleNum").addEventListener("click", function() {
  valueToDouble = document.getElementById("doubleNum").value;
  document.getElementById("q8").innerHTML = valueToDouble * 2;
});




// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1, num2;
num1=5;
num2=10;
if (num1>num2){
  document.getElementById("q9").innerHTML = "Yes, the value of num1 is greater than num2";
} else {
  document.getElementById("q9").innerHTML = "No, the value of num1 is not greater than num2";
};


// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.

var score,message;
score = Math.round(Math.random()*100)+1;
message= "Your score: "+score;

if (score>=90){
  document.getElementById("q10").innerHTML = message + ". Great job!";
} else if (score >= 60 && score < 90){
  document.getElementById("q10").innerHTML = message + ". Nice work, keep practicing.";
} else if (score < 60){
  document.getElementById("q10").innerHTML = message + ". Very bad: study more and retake the test.";
};



// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."

document.getElementById("answeredButton").addEventListener("click", function() {
  document.getElementById("qa").innerHTML="My name is "+document.getElementById("name").value+". I'm "+document.getElementById("age").value+" years old, and I live in "+document.getElementById("city").value+".";
});



// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var rectWidth,rectHeight;
document.getElementById("answeredButtonB").addEventListener("click", function() {
  document.getElementById("qb").innerHTML="The rectangle is "+document.getElementById("rectWidth").value*document.getElementById("rectHeight").value+" inches."
});




// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.

document.getElementById("qc").innerHTML =" Whoops... looks like I got fancy with the question above and already accomplished this.";





// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.

var userName;
document.getElementById("answeredButtonD").addEventListener("click", function() {
  document.getElementById("qd").innerHTML="The length of your name is "+document.getElementById("userName").value.length+" characters."
});


// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad

var testScore;
document.getElementById("answeredButtonE").addEventListener("click", function() {

testScore = document.getElementById("testScore").value

if (testScore >= 90){
  document.getElementById("qe").innerHTML =  "Great job!";
} else if (testScore >= 60 && testScore<90){
  document.getElementById("qe").innerHTML =  "Nice work, keep practicing.";
} else if (testScore < 60){
  document.getElementById("qe").innerHTML = "Very bad: study more and retake the test.";
};

});


/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/

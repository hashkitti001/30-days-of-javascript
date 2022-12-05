//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = alert("The area of the triangle is" + " "+ (0.5 * base * height))
//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter side a");
let b = prompt("Enter side b");
let c = prompt("Enter side c");
let perimeter = ("The perimeter of the triangle is " + (a + b + c));
//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter length');
let width = prompt("Enter width");
let rectArea = prompt(2 * length * width);
//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter radius");
let circleArea = 3.14 * Math.pow(radius, 2);
let circumference = 2 * 3.14 * radius;
//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//y = mx + c
let cInt = -2; 
let slope = 2;
let yIntercept = slope*0 + cInt; //
let xIntercept = (yIntercept - cInt)/slope;
//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let m = (10 - 2)/(6-2) //2
//7. Compare the slope of above two questions.
"They have equal slopes"
// 8.  Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let a2 = 1;
let b2 = 6;
let c2 = 9;
let y = Math.pow(a2,2) + 6 * b2 + c2;
//9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours =  prompt("Enter hours:");
let rph = prompt("Enter rate per hour:");
let pay = alert(hours * rph);
//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let nameVar = prompt("Name:");
nameVar.length > 7? "long":"short"; 
//11. Compare your first name length and your family name length and you should get this output.
let familyName = prompt("Family name?");
familyName.length > nameVar.length ?
 "Your first name," + " " + nameVar + " " + "is longer than your" + " " + "family name," + familyName:
 false;
 //12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
 let myAge = 250;
 let yourAge = 25;
 alert("I am" + myAge - yourAge + "older than you!");
 //13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
 let birthyear = prompt("Enter birthyear:");
 let date = new Date;
 var year = date.getFullYear();
birthyear >= 18 ? alert("You are" + birthyear +"." + "You are old enough to drive"):
alert("You are" + birthyear + "You would be allowed to drive after" + 18 - birthyear + "years.");
//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
var years = prompt("Enter the number of years to live:");
alert("You lived" + years * 365 * 3600);
//15. Create a human readable time format using the Date time object
let year = date.getFullYear();
let month = months[date.getMonth()];
let day = date.getDay();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let hour = date.getHours();
let minutes = date.getMinutes();
//i. YYYY-MM-DD HH:mm
alert(year + "-" + month + "-" + day + " " + hour + ":" + minutes);
//ii. DD-MM-YYYY HH:mm
alert(day + "-" + month + "-" + year + " " + hour + ":" + minutes);
//iii. DD/MM/YYYY HH:mm
alert(day + "/" + month + "/" + year + " " + hour + ":" + minutes);



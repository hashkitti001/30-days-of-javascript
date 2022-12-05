//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Iwegbu"; 
    typeof(firstName);
let lastName = "Jeddy";
    typeof(lastName);
let age = 18;
    typeof(age);
let isMarried = false;
    typeof(isMarried);
let year = 2022;
    typeof(year);
//2. Check if type of '10' is equal to 10
typeof("10") == 10;
//3. Check if parseInt('9.8') is equal to 10
parseInt("9.8") == 10; //false
//4. Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
2 == 2;
var regex = "/\w+/" //Regex that searches for alphanumeric chars 
regex.test(lastName);
typeof("the") == "string"
// Write three JavaScript statement which provide falsy value.
typeof(2) == "string";
2 + 2 == 3;
6 % 2 == 3;
//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
 //i) 4 < 3 true
 //ii) 4 >= 3 //true
  //iii) 4 < 3 true
   //iv) 4 <= 3 //false
   //v) 4 == 4 //true 
   //vi) 4 === 4 //true 
   //vii) 4 != 4 //false
   //viii) 4!==4 //false
   //ix) 4 != "4" true
   //x) 4 == "4" false
   //xi) 4 === "4" false
   //xii) "python".length != "jargon".length //false
   //6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//i) 4 < 3 && 10 < 12 //false
//ii) 4 > 3 && 10 > 12 //false
//iii) 4 > 3 || 10 < 12 //true
//iv) 4 > 3 || 10 < 12 
//v) !(4 > 3) //false
//vi) !(4 < 3) //true
//vii) !(false) //true
//viii) !(4 > 3 && 10 < 12) //true
//ix)!(4 > 3 && 10 > 12) //true
//x) !(4 === "4")  //true
//xi) "python".includes("on") false
    //"jargon".includes("on") false

//7. Use the Date object to do the following activities
//i) The year 
let date = new Date;
date.getFullYear(); //2022
//ii) What is the month today as a number?
date.getMonth(); //12
//iii) What is the date today?
date.getDate(); //5
//iv) What is the day today as a number?
date.getDay(); //1
//v) What is the hours now?
date.getHours(); //Dynamic but at this point in time it was 2
//vi) What is the minutes now?
date.getMinutes(); //Dynamic but at this point in time it was 22
//vii) Find out the numbers of seconds elapsed from January 1, 1970 to now
date.getTime(); //1670246253319



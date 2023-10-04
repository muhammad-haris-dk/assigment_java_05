// // ****************** Q1 ***************************

// var currentDate = new Date()

// console.log(currentDate);

// // ****************** Q2 ***************************

// function name(firstName, lastName){
//     console.log(firstName + " " + lastName);
// }

// var firstName = prompt("Enter Your First Name")

// var lastName = prompt("Enter Your Last Name")

// name(firstName, lastName)

// // ****************** Q3 ***************************

// function number(num1, num2) {
//     return console.log(num1 + num2);
// }

// var num1 = +prompt("Enter a first number to addition")

// var num2 = +prompt("Enter Second number to addition")

// var result = number(num1, num2)

// // ****************** Q4 ***************************

// function calc(num1, oprator, num2) {
//     if (oprator === "+") {
//         return num1 + num2
//     }else if (oprator === "-") {
//         return num1 - num2
//     }else if (oprator === "*") {
//         return num1 * num2
//     }else if (oprator === "/") {
//         return num1 / num2
//     }
// }

// var num1 = +prompt("Enter a number")

// var oprator = prompt("Enter a oprator")

// var num2 = +prompt("Enter a number")

// var result = calc(num1, oprator, num2)

// console.log(result);

// ****************** Q5 ***************************

// function argument(a,b) {
//     console.log(a + " " + b);
// }

// argument("Hello", "World")

// ****************** Q6 ***************************

// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }

//     return num * factorial(num - 1);
// }


// var num = 5;

// var result = factorial(num);

// console.log("The factorial of " + num + " is " + result);

// ****************** Q7 ***************************

// function counting(end) {
//     for(var i = 1; i <= end; i++){
//         document.write(i + ",");
//     }
// }

// var end = prompt("Enter a Last Value")

// counting(end)

// ****************** Q8 ***************************

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(number) {
//         return number * number;
//     }

//     var baseSquare = calculateSquare(base);

//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuse = Math.floor(baseSquare + perpendicularSquare);

//     return hypotenuse;
// }


// var baseLength = 3;

// var perpendicularLength = 4;

// var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);

// console.log("The hypotenuse is " + hypotenuseLength);

// ****************** Q9 ***************************

// function rectanglearea(widthValue, heightValue) {
//     var area = widthValue * heightValue;

//     return area;
// }

// var widthValue = 5;

// var heightValue = 10;

// var areaByValue = rectanglearea(widthValue, heightValue);

// console.log("The area of the rectangular is " + areaByValue);

// ****************** Q10 ***************************

// function palindrome(name, check) {
//     for(var i = name.length -1; i >= 0; i--){
//         check +=name[i]
//     }
//     if (name === check) {
//         console.log(name + " Palindrome name");
//     }else{
//         console.log(name + " not a Palindrome name");
//     }
// }

// var name = prompt("Enter a word")

// var check = ""

// palindrome(name, check)

// ****************** Q11 ***************************

// function findLongestWord(inputString) {
    
//     var words = inputString.split(' ');
  
//     var longestWord = '';

//     var longestLength = 0;
  
//     // Iterate through each word in the array
//     for (var word of words) {

//       var cleanedWord = word.replace(/[^A-Za-z0-9]/g, '');
  
//       if (cleanedWord.length > longestLength) {
//         longestWord = cleanedWord;
//         longestLength = cleanedWord.length;
//       }
//     }
  
//     return longestWord;
//   }
  
  
//   var inputString = 'this concept not a clear';

//   var longestWord = findLongestWord(inputString);

//   console.log("The longest word in the string is: " + longestWord);
  
// ****************** Q12 ***************************

// function count(inputString, letterString) {
//     var counter = 0;

//     for(var i = 0; i <= inputString.length; i++){
//         if (inputString[i] === letterString) {
//             counter++
//         }
//     }

//     return counter
// }

// var inputString = "JsResources.com"

// var letterString = "o"

// var result = count(inputString, letterString)

// console.log("The letter " + letterString + " appears " + result + " time in the string");|

// ****************** Q13 ***************************

function calcCircumference(radius) {
    var Circumference = 2 * Math.PI * radius;

    console.log("The Circumference is " + Circumference.toFixed(2));
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);

    console.log("The area is " + area.toFixed(2));
}

var radius = 5;

calcCircumference(radius)

calcArea(radius)
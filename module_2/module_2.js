////Task 1
// let x = 1;
// let y = 2;
// let res1 = "" + x + y;
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + "" + 2;
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = Boolean(x);
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = parseFloat(Boolean(x));
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

////Task 2
// let number = prompt("Choose a number");
// if (number % 2 === 0 && number > 0) {
//   console.log("Your number is paired positive");
// } else if (number % 7 === 0) {
//   console.log("You number is multiple 7");
// } else {
//   console.log("It's not a number");
// }

// //Task 3
// let arr = [];
// arr.push(12, "java", true, null);
// console.log(arr.length);
// arr[4] = prompt("Choose a value");
// console.log(arr[4]);
// arr.shift();
// console.log(arr);

//Task 4
let cities = ["Rome", "Lviv", "Warsaw"];
let res = cities.reduce(function (sum, i) {
  return sum + "*" + i;
})
console.log(res);

// //Task 5
// let isAdult = Number(prompt("What is your age?"));
// if (isAdult >= 18) {
//   alert("You are an adult!");
// } else if (isAdult < 18) {
//   alert("You are too young!");
// } else {
//   alert("Wrong value");
// }

////Task 6

// let a = Number(prompt("Set a value of first side"));
// let b = Number(prompt("Set a value of second side"));
// let c = Number(prompt("Set a value of third side"));

// //Calculating area
// if (a > 0 && b > 0 && c > 0) {
//   let p = (a + b + c) / 2;
//   let triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   console.log("Triangle area is: " + triangleArea.toFixed(3));
// }
// else {
//   alert("Incorrect data!");
// }

// //Checking whether the triangle is right-angled
// if ((a * a + b * b === c * c) || (b * b + c * c === a * a) || (c * c + a * a === b * b)) {
//   console.log("The triangle is right-angeled")
// }
// else {
//   console.log("The triangle is'n right-angeled")
// }

//Task 7
var date = new Date();
currentHour = date.getHours();
// if (currentHour >= 23 && currentHour <= 5) {
//   alert("Good night!");
// }
// else if (currentHour > 5 && currentHour <= 11) {
//   alert("Good morning!");
// }
// else if (currentHour > 11 && currentHour <= 17) {
//   alert("Good day!");
// }
// else if (currentHour > 17 && currentHour < 23) {
//   alert("Good evening");
// }

switch (true) {
  case (currentHour >= 23 && currentHour <= 5):
    alert("Good night!");
    break;
  case (currentHour > 5 && currentHour <= 11):
    alert("Good morning!");
    break;
  case (currentHour > 11 && currentHour <= 17):
    alert("Good day!");
    break;
  case (currentHour > 17 && currentHour < 23):
    alert("Good evening!");
    console.log("okk");
    break;
}

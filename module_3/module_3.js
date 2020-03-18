// Task 1
// let arr = [2, 3, 4, 5];
// let res = 1;
// for (i = 0; i < arr.length; i++) {
//     res *= arr[i];
// }
// console.log(res);

// let i = 0;
// let res = 1;
// while (i < arr.length) {
//     res = res * arr[i];
//     i++;
// }
// console.log(res);

//Task 2
// for (i = 0; i <= 15; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(`${i} is even`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} is odd`);
//     } else {
//         console.log("It's zero");
//     }
// }

//Task 3
// function randArray(k) {
//     let arr = [];
//     let max = 500;
//     for (i = 0; i < k; i++) {
//         let randomNumber = Math.round(Math.random() * (max + 1));
//         arr.push(randomNumber);
//     }
//     console.log(arr);
// }

//Task 4
// function raiseToDegree(a, b) {
//     let c = parseInt(a);
//     let d = parseInt(b);
//     let res = c ** d;
//     return res;
// }

// //Task 5
// function findMin() {
//     let min = arguments[0];
//     for (i = 1; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }

//Task 6
// function findUnique(arr) {
//     for (i = 0; i < arr.length; i++) {
//         let k = arr[i];
//         for (j = 0; j < arr.length; ++j) {
//             if (i === j) {
//                 continue;
//             } else if (k === arr[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

//Task 7
// function lastElem(arr, amountOfElements) {
//     let invers = arr.concat();
//     invers.reverse();
//     if (amountOfElements === undefined) {
//         return invers[0];
//     } else {
//         let res = invers.slice(0, amountOfElements);
//         res.reverse();
//         return res;
//     }
// }

//Task 8 
// function convertToUpper(str) {
//     str = str.split(" ");
//     for (i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substring(1);
//     }
//     return str.join(" ");
// }

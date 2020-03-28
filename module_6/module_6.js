////Task 1
document.querySelector("#test").innerHTML = "Last";
document.body.children[0].innerHTML = "Last";


// //Task 2
// let currentImg = document.getElementsByTagName('img')[0];
// currentImg.src = localStorage.getItem('src') || 'dog.jpg';
// if (currentImg.getAttribute('src') == 'dog.jpg') {
//     localStorage.setItem('src', 'cat.jpg');
// }
// else {
//     localStorage.setItem('src', 'dog.jpg');
// }
// alert(currentImg.outerHTML);


// //Task 3
// let p = document.querySelectorAll("div p");
// for (i = 0; i < p.length; i++) {
//     console.log(`Selector text ${i}: ${p[i].innerHTML}`);
// }


//Task 4
// let list = document.querySelectorAll('ul#list li');
// let firstLi = list[0].innerHTML;
// let lastLi = list[4].innerHTML;
// let secondLi = list[1].innerHTML;
// let fourthLi = list[3].innerHTML;
// let thirdLi = list[2].innerHTML;

// let list = document.querySelector('#list');
// let firstLi = list.firstElementChild.innerHTML;
// let lastLi = list.lastElementChild.innerHTML;
// let secondLi = list.firstElementChild.nextElementSibling.innerHTML;
// let fourthLi = list.lastElementChild.previousElementSibling.innerHTML;
// let thirdLi = list.lastElementChild.previousElementSibling.previousElementSibling.innerHTML;

// alert(`${firstLi}, ${lastLi}, ${secondLi}, ${fourthLi}, ${thirdLi}`);


// //Task 5
// let header = document.getElementsByTagName("h1")[0];
// header.style.backgroundColor = "#42f575";

// let p = document.querySelectorAll("div#myDiv p");
// p[0].style.fontWeight = "bold";
// p[1].style.color = "red";
// p[2].style.textDecoration = "underline";
// p[3].style.fontStyle = "italic";

// let lis = document.querySelectorAll("ul#myList li");
// for (i = 0; i < lis.length; i++) {
//     lis[i].style.display = "inline";
// }

// let span = document.getElementsByTagName("span")[0];
// span.style.visibility = "hidden";


// //Task 6
// let firstInput = document.querySelector("#input1");
// let secondInput = document.querySelector("#input2");
// firstInput.value = prompt("Fill in the field");
// secondInput.value = prompt("Fill in one more time the field");

// let firstInputClone = firstInput.cloneNode(false);
// firstInput.value = secondInput.value;
// secondInput.value = firstInputClone.value;

// //Task 7
// let body = document.createElement("body");
// let main = document.createElement("main");
// main.className = "mainClass check item";
// let div = document.createElement("div");
// div.id = "myDiv";
// div.innerHTML = "<p>First paragrapg</p>";
// let head = document.querySelector("head");
// main.prepend(div);
// body.prepend(main);
// head.after(body);
// console.log(body);


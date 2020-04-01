//**************************** Task 1 *****************************
let openTab = window.open("", "", "width=300,height=300");
setTimeout(() => {
    openTab.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
    openTab.moveTo(200, 200);
}, 4000);
setTimeout(() => {
    openTab.close();
}, 6000);

//**************************** Task 2 *****************************
// function changeCSS() {
//     document.querySelector("#text").style = "color: orange; font-size: 20px; font-family: Comic Sans MS";
// }
// document.getElementsByTagName("button")[0].addEventListener("click", changeCSS);

//**************************** Task 3 *****************************
// document.getElementsByTagName("button")[0].addEventListener("click", () => {
//     document.body.style.backgroundColor = "blue";
// });

// document.getElementsByTagName("button")[1].addEventListener("dblclick", () => {
//     document.body.style.backgroundColor = "pink";
// });

// let btn3 = document.getElementsByTagName("button")[2];
// btn3.addEventListener("mousedown", () => {
//     document.body.style.backgroundColor = "brown";
// })
// btn3.addEventListener("mouseup", resetBackgroundColor);

// let link = document.getElementsByTagName("a")[0];
// link.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "yellow";
// });
// link.addEventListener("mouseleave", resetBackgroundColor);

// function resetBackgroundColor() {
//     document.body.style.backgroundColor = "white";
// }

//**************************** Task 4 *****************************
// let sel = document.getElementById('list')
// document.getElementsByTagName("button")[0].addEventListener("click", () => {
//     console.log(sel.options[sel.selectedIndex]);
//     sel.removeChild(sel.options[sel.selectedIndex]);
// });

//**************************** Task 5 *****************************
// let liveBtn = document.querySelector("#liveBtn");
// liveBtn.addEventListener("click", () => {
//     let p = document.createElement("p");
//     p.innerHTML = (`I was pressed`);
//     document.body.appendChild(p);
// });
// liveBtn.addEventListener("mouseover", () => {
//     let p = document.createElement("p");
//     p.innerHTML = (`Mouse on me!`);
//     document.body.appendChild(p);
// });
// liveBtn.addEventListener("mouseout", () => {
//     let p = document.createElement("p");
//     p.innerHTML = (`Mouse is not on me!`);
//     document.body.appendChild(p);
// });

//**************************** Task 6 *****************************
// let width = document.getElementById("width");
// let height = document.getElementById("height");
// window.addEventListener("resize", () => {
//     width.innerHTML = `Width: ${window.innerWidth}, `;
//     height.innerHTML = `Height: ${window.innerHeight}`;
// })

//**************************** Task 7 *****************************
// let countries = document.getElementById("countries");
// let towns = document.getElementById("towns");
// let city = document.getElementById("city");
// countries.addEventListener("change", () => {
//     city.textContent = "";
//     let countryName = countries.options[countries.selectedIndex].className;
//     for (i = 0; i < towns.length; i++) {
//         if (countryName !== towns[i].className) {
//             towns[i].style.display = "none";
//         }
//         else if (countryName === towns[i].className) {
//             towns[i].style.display = "block";
//         }
//     }
//     document.getElementById("country").textContent = countryName;
// });
// towns.addEventListener("change", () => {
//     city.textContent = `, ${towns.options[towns.selectedIndex].textContent}`;
// });


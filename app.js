let main = document.getElementById('main');
let mode = document.getElementById('mode');
let input = document.getElementById('input');
let button = document.querySelectorAll("#button");
let black = document.querySelectorAll(".black");
let numberer = document.getElementById("number");
let lights = document.getElementById("light");
let darks = document.getElementById("dark");

function light() {
    main.style.backgroundColor = 'white';
    mode.style.backgroundColor = 'rgb(240, 240, 240)';
    lights.src = "./images/black-sun.png"
    darks.src = "./images/black-moon.png"
    numberer.style.color = 'black';
    input.style.backgroundColor = 'white';
    button.forEach(
        (element) => (element.style.backgroundColor = 'rgb(240, 240, 240)')
    );
    black.forEach(
        (element) => (element.style.color = 'black')
    );
};

function dark() {
    main.style.backgroundColor = 'black';
    mode.style.backgroundColor = 'rgb(50, 50, 50)';
    numberer.style.color = 'white';
    input.style.backgroundColor = 'rgb(20, 20, 20)';
    button.forEach(
        (element) => (element.style.backgroundColor = 'rgb(5, 5, 5)')
    );
    black.forEach(
        (element) => (element.style.color = 'white')
    );
};

// numberer.addEventListener("change", function (event) {
//     b = event.target.value
// })
// console.log();
// let a = '890642';
// a.slice(-1)
// console.log(a);
// function deleter() {
//     // a.slice(-1, -2)
//     for (let index = 0; index < a.slice(-1, -2).length; index--) {
//         const element = a[index];
//         console.log(element);
//     }
//     // for (let index = 0; index > numberer.length; index--) {
//     //     const element = numberer[index];
//     //     console.log(element)
//     // }
// };

function deleter() {
    calculator.display.value = calculator.display.value.slice(0, -1)
}


function trimer() {
    calculator.display.value = Number(calculator.display.value).toFixed(8)
}
const name = prompt("Ismingiz nima?");
const secondname = prompt("Familyangiz nima?");
const age = prompt("yoshingiz nechida");

document.querySelector("#name").textContent = name;
document.querySelector("#secondname").textContent = secondname;
document.querySelector("#age").textContent = age;

const resultElement = document.querySelector("#result");


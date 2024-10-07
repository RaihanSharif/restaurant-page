import "./styles.css";
import {homeTitle, homeIntro, homeHours, homeAddress} from "./home.js";
import {menu} from "./menu.js";


const content = document.getElementById("content");

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(homeTitle);
    content.appendChild(homeIntro);
    content.appendChild(homeHours);
    content.appendChild(homeAddress);
});
homeButton.click();

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu.title);
    content.appendChild(menu.menuContainer);
});

console.log(content);
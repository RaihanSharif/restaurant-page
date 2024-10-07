import "./styles.css";
import {homeTitle, homeIntro, homeHours, homeAddress} from "./home.js";
import {title, menuContainer} from "./menu.js";


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
    content.appendChild(title);
    content.appendChild(menuContainer);
});

console.log(content);
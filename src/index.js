import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

const content = document.getElementById("content");

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    home(content);
});
homeButton.click();

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu.title);
    content.appendChild(menu.appetizerContainer);
    content.appendChild(menu.mainCourseContainer);
    content.appendChild(menu.drinksContainer);
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(about.title);
    content.appendChild(about.moe);
    content.appendChild(about.barney);
    content.appendChild(about.ned);
});

console.log(content);


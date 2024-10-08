import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";


const content = document.getElementById("content");

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

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

console.log(content);
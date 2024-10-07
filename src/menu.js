import addressImg from "./resources/odin.png";

const title = document.createElement("h1");
title.textContent = "Odin's mead hall!";

const menuItems = [
    'asdf',
    'asdf',
    'asdf',
    'asdf',
]

const menuContainer = document.createElement("div");
const menuUl = document.createElement("ul");

menuItems.forEach(timeText => {
    const li = document.createElement("li");
    const textNode = document.createTextNode(timeText);
    li.appendChild(textNode);
    menuUl.appendChild(li);
});
menuContainer.appendChild(menuUl);

const menu = {
    title,
    menuContainer,
}

export {menu};
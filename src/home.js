import addressImg from "./resources/odin.png";

const title = document.createElement("h1");
title.textContent = "Odin's mead hall!";

const introContainer = document.createElement("div");
const introPara = document.createElement("p");
introPara.textContent = "Welcome, warriors and weary travelers, to Odin's hall! Feast,\
    sing, and raise your horns to the Allfather. Let the warmth of the fire and the chee\
    of the mead fill you, for tonight, you are among heroes and legends";

introContainer.appendChild(introPara);

const hoursContainer = document.createElement("div");
const openingTimes = [
    'Monday: 8am - 8pm',
    'Tuesday: 8am - 8pm',
    'Wednesday: 8am - 8pm',
    'Thursday: 8am - 8pm',
    'Friday: 8am - 8pm',
    'Saturday: 8am - 8pm',
    'Sunday: 8am - 8pm',
]
const hoursUl = document.createElement("ul");

openingTimes.forEach(timeText => {
    const li = document.createElement("li");
    const textNode = document.createTextNode(timeText);
    li.appendChild(textNode);
    hoursUl.appendChild(li);
});
hoursContainer.appendChild(hoursUl);

const addressContainer = document.createElement("div");
const addressIcon = document.createElement("img");
addressIcon.classList.add("icon");
addressIcon.src = addressImg; //TODO: this ia placeholder image
addressContainer.appendChild(addressIcon);


const addressLine = document.createElement("p");
addressLine.textContent = "123 Valhalla road, Asgard, Yggdrasil";
addressContainer.appendChild(addressLine);


function home(container) {
    container.appendChild(title);
    container.appendChild(introContainer);
    container.appendChild(hoursContainer);
    container.appendChild(addressContainer);
}

export {home}
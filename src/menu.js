
import breadImg from "./resources/bread.jpg";
import boarImg from "./resources/boar.jpg";
import meadImg from "./resources/mead.jpg";

const title = document.createElement("h1");
title.textContent = "Menu";

// Creates an ordered list with the menu item and its description.
// take in an object, i.e. set of key value pairs. Return an ol element
function menuBuilder(items) {
    const menuOl = document.createElement("ol");
    for(const [key, value] of Object.entries(items)) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = key;
        span.classList.add("item-name");
        const description = document.createTextNode(` - ${value}`);
        li.appendChild(span);
        li.appendChild(description);
        menuOl.appendChild(li);
        }
    return menuOl;
};

// Creates an HTML figure with an image and a caption. Returns a div
// containing the HTML list, and the figure as children.
function menuWithImageFigure(menuList, menuImage, caption) {
    const container = document.createElement("div");
    container.classList.add("menu-subcontainer");
    const figure = document.createElement("figure");
    
    const image = document.createElement("img");
    image.src = menuImage;

    const imgCaption = document.createElement("figcaption");
    imgCaption.textContent = caption;

    figure.appendChild(image);
    figure.appendChild(imgCaption);

    container.appendChild(menuList);
    container.appendChild(figure);

    return container;
}

// key = item, value = description.
const appetizers = {
    ["Freya's Fennel Bread"]: "Fresh rye bread with whipped honey butter and goat cheese.",
    ["Mjölnir Mussels"]: "sels in a mead and garlic broth.",
    ["Yggdrasil Root Soup"]: "Roasted root vegetable soup with crispy shallots.",
};

const appetizerContainer = document.createElement("div");
const appetizerHeader = document.createElement("h2");
appetizerHeader.textContent = "Appetizers";
appetizerContainer.appendChild(appetizerHeader);

const appetizerAndFigure = menuWithImageFigure(menuBuilder(appetizers), breadImg, "Freya's Fennel Bread");
appetizerContainer.appendChild(appetizerAndFigure);

const mainCourses = {
    ["Fenrir’s Feast"]: "Slow-roasted boar with crispy potatoes and cloudberry sauce.",
    ["Ragnarök Ribs"]: "Venison ribs with lingonberry glaze and smoked barley.",
    ["Viking Shield Steak"]: "Viking Shield Steak.",
    ["Njord’s Catch"]: "Seafood stew in a white wine and leek broth",
    ["The Valknut Plate"]: "Grilled vegetables with ancient grains and tarragon",
};
const mainCourseContainer = document.createElement("div");
const mainCourseHeader = document.createElement("h2");
mainCourseHeader.textContent = "Main Courses";
mainCourseContainer.appendChild(mainCourseHeader);

const mainWithFig = menuWithImageFigure(menuBuilder(mainCourses), boarImg, "Fenrir's Feast");
mainCourseContainer.appendChild(mainWithFig);



const drinks = {
    ["Odin’s Choice Mead"]: "A smooth, sweet honey mead with subtle floral notes, perfect for any warrior.",
    ["Thor’s Thunder Ale"]: "A robust, smoky ale with rich roasted malt flavors, ideal for quenching thirst after battle.",
    ["Freyr’s Fruity Wine"]: "A refreshing wild berry wine with hints of elderflower and citrus, celebrating nature's bounty.",
    ["Baldur’s Bright Lager"]: "Baldur’s Bright Lager.",
};

const drinksContainer = document.createElement("div");
const drinksHeader = document.createElement("h2");
drinksHeader.textContent = "Drinks";
drinksContainer.appendChild(drinksHeader);

const drinksWithFig = menuWithImageFigure(menuBuilder(drinks), meadImg, "Odin's choice Mead");

drinksContainer.appendChild(drinksWithFig);

const menu = {
    title,
    appetizerContainer,
    mainCourseContainer,
    drinksContainer,
}

export {menu};
const title = document.createElement("h1");
title.textContent = "Menu";

const appetizerContainer = document.createElement("div");
const appetizerHeader = document.createElement("h3");
appetizerHeader.textContent = "Appetizers";


// a function that creates a full order list with the menu item and it's description.
// take in a set of key value pairs.
function menuBuilder(items) {
    const menuOl = document.createElement("ol");
    for(const [key, value] of Object.entries(appetizers)) {
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
}

const appetizers = {
    ["Freya's Fennel Bread"]: "Fresh rye bread with whipped honey butter and goat cheese.",
    ["Mjölnir Mussels"]: "sels in a mead and garlic broth.",
    ["Yggdrasil Root Soup"]: "Roasted root vegetable soup with crispy shallots.",
}



appetizerContainer.appendChild(appetizerHeader);
appetizerContainer.appendChild(menuBuilder(appetizers));
const menu = {
    title,
    appetizerContainer,
}

export {menu};
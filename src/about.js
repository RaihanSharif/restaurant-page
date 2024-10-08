const title = document.createElement("h1");
title.textContent = "Meet the team";


function teamMemberBuilder(name, description) {
    const container = document.createElement("div");
    const staffName = document.createElement("h2");
    staffName.textContent = name;
    const about = document.createElement('p');
    about.textContent = description;
    container.appendChild(staffName);
    container.appendChild(about);
    return container;
}

const moe = teamMemberBuilder("Moe Sizlack", "Moe is our handsome bartender, who is always pleased to see new faces.");
const barney = teamMemberBuilder("Barney Gumble", "If you need advice on what to get from the bar, Barney is your man.");
const ned = teamMemberBuilder("Ned Flanders", "This is the man to bring the fun. You'll never be bored when Ned is about.")

const about = {
    title,
    moe,
    barney,
    ned,
};

export { about };
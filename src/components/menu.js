'use strict';

//Menu initialized
const menuBody = () => {
    var body = document.getElementById('sections');

    body.innerHTML =
        `       
            <div class="title">
                <h1>Menu</h1>
                <p>Welcome!</p>
            </div>
        `
    return body;
}

const menu = () => {

    //Selecting elements from nav
    const homeNav = document.getElementById("home-click");
    const menuNav = document.getElementById("menu-click");
    const aboutNav = document.getElementById("about-click");
    const contactNav = document.getElementById("contact-click");

    document.body.appendChild(menuBody());

    //Removes css class selections if any
    if (homeNav.classList.contains("selection")) {
        homeNav.classList.remove("selection");
    } else if (aboutNav.classList.contains("selection")) {
        aboutNav.classList.remove("selection");
    } else if (contactNav.classList.contains("selection")) {
        contactNav.classList.remove("selection");
    }

    //Add css class selection
    menuNav.className = "selection";

}

export default menu;

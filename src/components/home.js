'use strict';

//Home screen initialized
const index = () => {
    var body = document.getElementById('sections');

    //Welcome screen
    body.innerHTML =
        `
            <div class="title">
                <h1>Restaurante Mexicano</h1>
                <p>Welcome!</p>
            </div>

        `
    return body;
}

const home = () => {

    //Selecting elements from nav
    const homeNav = document.getElementById("home-click");
    const menuNav = document.getElementById("menu-click");
    const aboutNav = document.getElementById("about-click");
    const contactNav = document.getElementById("contact-click");

    document.body.appendChild(index());

    //Removes css class selections if any
    if (menuNav.classList.contains("selection")) {
        menuNav.classList.remove("selection");
    } else if (aboutNav.classList.contains("selection")) {
        aboutNav.classList.remove("selection");
    } else if (contactNav.classList.contains("selection")) {
        contactNav.classList.remove("selection");
    }

    //Add css class selection
    homeNav.className = "selection";

}

export default home;

'use strict';

//Contact screen initialized
const contactContent = () => {
    var body = document.getElementById('sections');

    // navbar function
    body.innerHTML =
        `       
            <div class="title">
                <h1>Contact</h1>
                <p>Welcome!</p>
            </div>
        `
    return body;
}

const contact = () => {

    //Selecting elements from nav
    const homeNav = document.getElementById("home-click");
    const menuNav = document.getElementById("menu-click");
    const aboutNav = document.getElementById("about-click");
    const contactNav = document.getElementById("contact-click");

    document.body.appendChild(contactContent());

    //Removes css class selections if any
    if (menuNav.classList.contains("selection")) {
        menuNav.classList.remove("selection");
    } else if (aboutNav.classList.contains("selection")) {
        aboutNav.classList.remove("selection");
    } else if (homeNav.classList.contains("selection")) {
        homeNav.classList.remove("selection");
    }

    //Add css class selection
    contactNav.className = "selection";

}

export default contact;

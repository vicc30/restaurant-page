'use strict';
//import image
import imageHistory from '../assets/images/about.jpg';

const content = () => {
    var body = document.getElementById('sections');

    // navbar function
    body.innerHTML =
        `       
            <div class="about-title">
                <h1>About Us</h1>
                <p>Here is our story =)</p>
            </div>
            <div class="about-content">
                <h2>Our History</h2>
                <img src="${imageHistory}" alt="Our team"></img>
                <p>We began our journey in 2020 and ... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi accusamus a distinctio laboriosam incidunt ea expedita earum voluptatum explicabo! Consectetur quidem sed impedit sint vitae eaque quasi unde aut numquam!</p>
            </div>
        `
    return body;
}

const about = () => {

     //Selecting elements from nav
     const homeNav = document.getElementById("home-click");
     const menuNav = document.getElementById("menu-click");
     const aboutNav = document.getElementById("about-click");
     const contactNav = document.getElementById("contact-click");

    document.body.appendChild(content());

    //Removes css class selections if any
    if (menuNav.classList.contains("selection")) {
        menuNav.classList.remove("selection");
    } else if (homeNav.classList.contains("selection")) {
        homeNav.classList.remove("selection");
    } else if (contactNav.classList.contains("selection")) {
        contactNav.classList.remove("selection");
    }

    //Add css class selection
    aboutNav.className = "selection";

}

export default about;

'use strict';
//Import styles
import './style.css';
//Import components
import home from './components/home';
import menu from './components/menu';
import contact from './components/contact';
import about from './components/about';

//Initialization
const index = () => {
    var body = document.getElementById('content');
    // navbar, section and footer render function
    body.innerHTML =
        `
            <nav>
                <div class="sidenav">
                    <a href='#' id="home-click">Home</a>
                    <a href='#' id="menu-click">Menu</a>
                    <a href="#" id="about-click">About</a>
                    <a href="#" id="contact-click">Contact</a>
                </div>
            </nav>
            
            <section id="sections">
            </section>
            <div class="fixed">
                Made by Victor C.
            </div>
        `
    return body;
}

document.body.appendChild(index());
//When initialized runs home screen as default
home();

//Event listener for each tab in nav menu
document.getElementById("home-click").addEventListener("click", function () {
    console.log("home clicked");
    home();
});

document.getElementById("menu-click").addEventListener("click", function () {
    console.log("menu clicked");
    menu();
});

document.getElementById("about-click").addEventListener("click", function () {
    console.log("about clicked");
    about();
});

document.getElementById("contact-click").addEventListener("click", function () {
    console.log("contact clicked");
    contact();
});

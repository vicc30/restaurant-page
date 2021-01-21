const content = () => {
    var body = document.getElementById('sections');

    // navbar function
    body.innerHTML =
        `       
            <div class="title">
                <h1>About</h1>
                <p>Welcome!</p>
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

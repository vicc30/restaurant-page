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

    document.body.appendChild(contactContent());

}

export default contact;

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

    document.body.appendChild(menuBody());

}

export default menu;

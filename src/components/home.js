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

    document.body.appendChild(index());

}

export default home;

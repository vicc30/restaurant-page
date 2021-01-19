'use strict';
import './style.css';

const index = () => {
    var body = document.getElementById('content');

    // navbar function
    body.innerHTML =
        `
            <div class="sidenav">
                <a href="#" class="selection">Home</a>
                <a href="#">Menu</a>
                <a href="#">Contact</a>
            </div>

            <div class="pages">
                <h2>CSS Template</h2>
                <p>A full-height, fixed sidenav and content.</p>
            </div>
        `
    return body;
}

document.body.appendChild(index());
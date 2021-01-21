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

    document.body.appendChild(content());

}

export default about;

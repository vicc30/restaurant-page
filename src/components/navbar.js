const index = () => {
    var body = document.getElementById('content');

    // navbar function
    body.innerHTML =
        `
            <nav>
                <div class="sidenav">
                    <a href="#" class="selection">Home</a>
                    <a href="#">Menu</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
            
            
            <div class="title">
                <h1>Restaurante Mexicano</h1>
                <p>Welcome!</p>
            </div>
        `
    return body;
}

const navbar = () => {

    document.body.appendChild(index());

}

export default navbar;

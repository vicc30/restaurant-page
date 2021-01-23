# Restaurant Page

This is my solution for PROJECT: RESTAURANT PAGE by [Odin Project](https://www.theodinproject.com/lessons/restaurant-page).

In this excercise I made a simple restaurante page dynamically rendered using DOM manipulation.

## Preview

- Look the preview [here](https://vicc30.github.io/restaurant-page/)

## Technologies

- Node JS
- Webpack
- npm

## Program languages

- JS
- CSS

## Commands

- Clone [repository](https://github.com/vicc30/restaurant-page.git) via HTTPS.
- Run on terminal `cd restaurant-page`
- Run `npm install`
- Run `npm run build` for webpack build. Configured `watch: true` on webpack for automatic build when src code is changed.
- It is needed an index.html entry file on distribution folder for correct rendering.

### Index.html

- The index.html file need to be in dist folder.
- It need to have a `<div id="content"></div>` in body where all the elements will render.
- In footer it needs to have the `<script src="main.js"></script>` tag for importing the JS code.
- Template is already inside dist folder. Here is an example:
`<body>`
`<div id="content">`
`</div>`
`<script src="main.js"></script>`
`</body>`

### Dependecies

- devDependencies:
    - "css-loader": "^5.0.1"
    - "style-loader": "^2.0.0"
    - "webpack": "^5.15.0"
    - "webpack-cli": "^4.4.0"

## Distribution

- Folder distribution source code.

📦src
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜about.jpg
 ┃ ┃ ┣ 📜bg-about.jpg
 ┃ ┃ ┣ 📜bg-menu.jpeg
 ┃ ┃ ┣ 📜bg.jpeg
 ┃ ┃ ┣ 📜contact.jpg
 ┃ ┃ ┣ 📜dish-1.jpg
 ┃ ┃ ┣ 📜dish-2.jpg
 ┃ ┃ ┣ 📜dish-3.jpg
 ┃ ┃ ┣ 📜dish-4.jpg
 ┃ ┃ ┣ 📜dish-5.jpg
 ┃ ┃ ┗ 📜dish-6.jpg
 ┣ 📂components
 ┃ ┣ 📜about.js
 ┃ ┣ 📜contact.js
 ┃ ┣ 📜home.js
 ┃ ┗ 📜menu.js
 ┣ 📜index.js
 ┗ 📜style.css
📜.gitignore
📜package-lock.json
📜package.json
📜README.md
📜webpack.config.js

- Folder distribution webpack build dist.

📦dist
 ┣ 📜*.jpg
 ┣ 📜index.html
 ┗ 📜main.js

## References

- [W3 schools - CSS](https://www.w3schools.com/css/)
- [All Images by Pixabay](https://pixabay.com/)
- [Webpack Documentation](https://webpack.js.org/)
- [Deploying a subfolder to GitHub Pages](https://gist.github.com/cobyism/4730490)
- [Mark Down Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [The Odin Project: JavaScript - ES6 Modules](https://www.theodinproject.com/courses/javascript/lessons/es6-modules)
- [Icons Font Awesome](https://fontawesome.com/)

### Support

- If you like my solution click like submission.

#### Made with :heart: by [Victor Cruz](https://github.com/vicc30)

'use strict';

import contactImg from '../assets/images/contact.jpg';
 
//Contact screen initialized
const contactContent = () => {
  var body = document.getElementById('sections');

  // navbar function
  body.innerHTML =
    `       
  <div class="contact-title">
      <h1>Contact</h1>
      <p>Want a delicious dish?</p>
  </div>
  <div class="container">
  <div class="contact-content">
    <h2>Contact Information!</h2>
    <p>Have a question or a suggestion? Leave your message and we will contact as soon as posible!</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="${contactImg}">
    </div>
    <div class="column">
      <form action="#">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="mexico">Mexico</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write your message here.." style="height:170px"></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</div>
        `
  return body;
}

const contact = () => {

  //Selecting elements from nav
  const homeNav = document.getElementById("home-click");
  const menuNav = document.getElementById("menu-click");
  const aboutNav = document.getElementById("about-click");
  const contactNav = document.getElementById("contact-click");

  document.body.appendChild(contactContent());

  //Removes css class selections if any
  if (menuNav.classList.contains("selection")) {
    menuNav.classList.remove("selection");
  } else if (aboutNav.classList.contains("selection")) {
    aboutNav.classList.remove("selection");
  } else if (homeNav.classList.contains("selection")) {
    homeNav.classList.remove("selection");
  }

  //Add css class selection
  contactNav.className = "selection";

}

export default contact;

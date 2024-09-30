import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Email: nikakhaburzania18@gmail.com</p>
      <p>Phone: +995 579 26 93 90</p>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

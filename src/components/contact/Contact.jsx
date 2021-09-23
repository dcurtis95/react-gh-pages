import { useState } from "react";
import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss";

export default function Contact() {
  const [contactStyle, setContactStyle] = useState(false);
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rlplb9b', 'template_drioq9b', form.current, 'user_UTUIbQjFoKO7fyoi9L1tE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
      setMessage(true);
  };
  return (
    <div className={"contact " + (contactStyle && "active")} id="contact">
      <div className="item">
        <div className="right">
          <h2 onClick={() => setContactStyle(!contactStyle)}>Contact.</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Subject" name="subject" />
            <input type="text" placeholder="Email" name="email" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit" value="Send">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

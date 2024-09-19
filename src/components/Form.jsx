import "./Form.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const index = () => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mwmzekm",
        "template_h48c629",
        form.current,
        "XpCJPkSCG2vQBqvKv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(!show);
        },
        (err) => {
          console.log(err.text);
        }
      );

  };

  return (
    <div className="left" id="contact">
      {show ? (
        <div>
          <h2>Message Sent</h2>
          <p>
            Thanks for sending a message, we`ll get back to you as soon as we
            can! If this is urgent, please give us a call at <a href="tel:225-296-5556">225.296.5556</a>
          </p>
        </div>
      ) : (
        <div>
          <h2>Leave us a message</h2>
          <form ref={form} >
            <input type="text" name="user_name" id="name"  required />
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_email"
              id="email"
              required
            />
            <label htmlFor="user_email">Email</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
            />
            <label htmlFor="subject">Subject</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Type your message here..." required
            />
            <button
              type="submit"
              className="callout-btn" onClick={sendEmail}>Tell Us About it</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default index;

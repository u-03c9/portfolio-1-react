import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

import "./contact.styles.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9ma0sjw",
        "template_b6k301o",
        form.current,
        "h_v6hFfnl1qXzKkMD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="icon" />
            <h4>Email</h4>
            <h5>test@test.com</h5>
            <a href="mailto:test@gmail.com" target="_blank">
              Send a message
            </a>
          </div>
          <div className="contact__option">
            <RiMessengerLine className="icon" />
            <h4>Messenger</h4>
            <h5>Profile Name</h5>
            <a href="https://m.me/profileId" target="_blank">
              Send a message
            </a>
          </div>
          <div className="contact__option">
            <RiWhatsappLine className="icon" />
            <h4>Whatsapp</h4>
            <h5>+20 0010 010 1010</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2000100101010"
              target="_blank"
            >
              Send a message
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

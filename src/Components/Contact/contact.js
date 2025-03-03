import React, {  useRef } from "react";
import facebook from "../../images/facebook.jpeg";
import insta from "../../images/insta.jpeg";
import linkedin from "../../images/linkedin.jpeg";
import whatsapp from "../../images/whatsapp logo.jpeg";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lmo4jk3", "template_5iyjlis", form.current, {
        publicKey: "tdvF5W7zu3OBYLR7d",
      })
      .then(
        (result) => {
          console.log("result.text");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          name="message"
          rows="5"
          className="msg"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img src={insta} alt="insta" className="link" />
          <img src={facebook} alt="facebook" className="link" />
          <img src={linkedin} alt="linkedin" className="link" />
          <img src={whatsapp} alt="whataspp" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;

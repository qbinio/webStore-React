import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactFormFormik from "../../components/ContactForm/ContactFormFormik";
import contactSvg from "../../assets/images/undraw_Envelope_re_f5j4.svg";
import "./Contact.css";

const Contact = () => (
  <div className="contactContainer">
    <h1 style={{ textAlign: "center" }}>Contact us</h1>
    <div class="contactWrapper">
      <ContactForm />
      <img src={contactSvg} />
    </div>
  </div>
);
// <ContactFormFormik />

export default Contact;

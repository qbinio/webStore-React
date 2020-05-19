import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [emailErrorAlert, setEmailErrorAlert] = useState("");
  const [successAlert, setSuccessAlert] = useState("");
  const [phoneNumberErrorAlert, setPhoneNumberErrorAlert] = useState("");

  const onValidate = (e) => {
    e.preventDefault();
    // e.target.reset();

    const emailInputValue = e.target.email.value;

    if (!emailInputValue.includes("@")) {
      setEmailErrorAlert("Pole email musi zawierac @");
    } else {
      setEmailErrorAlert("");
    }

    const phoneNumberInputValue = e.target.phoneNumber.value;

    if (phoneNumberInputValue.substring(0, 3) !== "+48")
      setPhoneNumberErrorAlert("Wprowadź numer kierunkowy +48");
    // if (phoneNumberInputValue.length > 10);
    // setPhoneNumberErrorAlert("Wprowadziłeś zbyt długi numer");
    else {
      setSuccessAlert("Wysłano");
      setPhoneNumberErrorAlert("");
    }

    // if (!phoneNumberInputValue.includes())
    //   setPhoneNumberErrorAlert("Wprowadziłeś zbyt długi numer");
    // else {
    //   setSuccessAlert("Wysłano");
    //   setPhoneNumberErrorAlert("");
    // }
  };

  return (
    <div className="contactFormWrapper">
      <form className="contactForm" onSubmit={onValidate}>
        <label htmlFor="name">Your Name *</label>
        <input
          className="contactFormInput"
          type="name"
          id="name"
          name="name"
          required={true}
        />
        <label htmlFor="email">Your Email *</label>
        <input
          className="contactFormInput"
          type="text"
          id="email"
          name="email"
          required={true}
        />
        <h4 style={{ color: "red" }}>{emailErrorAlert}</h4>
        <label htmlFor="phoneNumber">Your Phone Number *</label>
        <input
          className="contactFormInput"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          pattern="[+]{1}\[0-9]"
          required={true}
        />
        <h4 style={{ color: "red" }}>{phoneNumberErrorAlert}</h4>
        <label htmlFor="subject">Subject *</label>
        <input
          className="contactFormInput"
          type="text"
          id="subject"
          name="subject"
          required={true}
        />
        <label htmlFor="message">Your Message *</label>
        <textarea
          className="contactFormInput"
          name="message"
          id="message"
          cols="30"
          rows="10"
          required={true}
        />
        <div className="contactButton">
          <button className="contactFormButton" type="submit">
            Send
          </button>
          <h4 style={{ color: "green", marginLeft: "20px" }}>{successAlert}</h4>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

//Email regex
// const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// return re.test(String(email).toLowerCase());

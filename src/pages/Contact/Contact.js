import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="column"></div>
      <ContactUs />
      <div className="column"></div>
    </div>
  );
}

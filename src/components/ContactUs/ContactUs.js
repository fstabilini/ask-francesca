import React, { useState } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit is being executed!");

    window.location.href = `mailto:platepal@example.com?subject=Contact from ${formData.name}&body=${formData.subject}`;
    setFormData({
      name: "",
      email: "",
      subject: "",
    });
  };

  return (
    <div className="contact-us">
      <form onSubmit={handleSubmit} className="contact-us__form">
        <h2>Contact us</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className={`contact-us__input-name ${
            formData.name ? "contact-us__input-name--active" : ""
          }`}
        />
        <textarea
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={`contact-us__textarea-subject ${
            formData.subject ? "contact-us__textarea-subject--active" : ""
          }`}
          rows="4"
        ></textarea>

        <button type="submit" className="contact-us__button">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

import React, { useState } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(value)) {
        setErrors({ email: "invalid Email" });
      } else {
        setErrors({ email: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      errors.email === "" &&
      formData.email &&
      formData.subject
    ) {
      // Restablecer el formulario a valores iniciales
      setFormData({
        name: "",
        email: "",
        subject: "",
      });
    }
  };

  return (
    <div className="contact-us">
      <form onSubmit={handleSubmit} className="contact-us__form">
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
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={`contact-us__input-email ${
            formData.email
              ? errors.email
                ? "contact-us__input-email--error"
                : "contact-us__input-email--active"
              : ""
          }`}
        />
        {errors.email && (
          <span className="contact-us__error">{errors.email}</span>
        )}
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
          Send
        </button>
      </form>
    </div>
  );
};

// subject is not working, and email is still in blue
// conectar para se mande el mail

export default ContactUs;

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
      console.log("Form submitted", formData);

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
          className={formData.name ? "active" : ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={formData.email ? (errors.email ? "error" : "active") : ""}
        />
        {errors.email && (
          <span className="contact-us__error">{errors.email}</span>
        )}
        <textarea
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={formData.subject ? "active" : ""}
          rows="4"
        ></textarea>

        {/* <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={formData.subject ? "active" : ""}
        /> */}
        <button type="submit" className="contact-us__btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

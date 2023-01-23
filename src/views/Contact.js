import React from "react";

import ReusableHeader from "../components/ReusableHeader";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  const contactHeaderProps = {
    header: "contact me",
    paragraph:
      "Feel free to contact me by submitting the form below, and I'll get back to you as soon as possible",
  };

  return (
    <section id="contact" className="contact-section-wrapper">
      <ReusableHeader {...contactHeaderProps} />
      <ContactForm />
    </section>
  );
};

export default Contact;

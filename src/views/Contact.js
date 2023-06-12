import React from "react";
import { motion } from "framer-motion";

import ReusableHeader from "../components/ReusableHeader";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
	const contactHeaderProps = {
		header: "contact me",
		paragraph:
			"Feel free to contact me by submitting the form below, and I'll get back to you as soon as possible",
	};

	return (
		<motion.section
			id="contact"
			className="contact-section-wrapper"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			<ReusableHeader {...contactHeaderProps} />
			<ContactForm />
		</motion.section>
	);
};

export default Contact;

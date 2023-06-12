import React from "react";
import { motion } from "framer-motion";
import ReusableHeader from "../components/ReusableHeader";
import MoreInfo from "../components/about/MoreInfo";
import MySkills from "../components/about/MySkills";

const About = () => {
	return (
		<motion.section
			className="about-section-wrapper"
			id="about"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			<ReusableHeader />
			<div>
				<MoreInfo />
				<MySkills />
			</div>
		</motion.section>
	);
};

export default About;

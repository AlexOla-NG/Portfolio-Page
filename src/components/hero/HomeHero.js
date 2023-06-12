import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeHero = () => {
	return (
		<motion.section
			className="hero-section-wrapper"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			<div className="article">
				<h1>hey, i'm alexander oweka</h1>
				<p>
					A Front End Developer with an eye for design and deep
					understanding of usability goals.
				</p>
			</div>
			<button className="btn">
				<Link to="projects">projects</Link>
			</button>
		</motion.section>
	);
};

export default HomeHero;

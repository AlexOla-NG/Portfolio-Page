import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomeHero from "../hero/HomeHero";
import Home from "../../views/Home";
import About from "../../views/About";
import Projects from "../../views/Projects";
import Contact from "../../views/Contact";

import Error from "../../views/Error";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait" initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />}>
					<Route index element={<HomeHero />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;

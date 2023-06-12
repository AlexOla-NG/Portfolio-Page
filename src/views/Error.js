import React from "react";
import { motion } from "framer-motion";

import errorGif from "../assests/gifs/luke-404.webp";

const Error = () => {
	return (
		<motion.div
			className="error"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			<img src={errorGif} loading="lazy" />
		</motion.div>
	);
};

export default Error;

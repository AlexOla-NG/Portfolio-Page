import React from "react";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";

const App = () => {
	return (
		<>
			<Navbar />
			<AnimatedRoutes />

			<Footer />
		</>
	);
};

export default App;

import React from "react";
import { motion } from "framer-motion";
import ReusableHeader from "../components/ReusableHeader";
import SingleProject from "../components/projects/SingleProject";

import shortlyScreenshot from "../assests/shortlyDesktopPreview.jpg";
import randomAdviceScreenshot from "../assests/adviceGenDesktopPreview.jpg";
import lendsqrLoginScreenshot from "../assests/lendsqrLoginScreenshot.png";
import scandiwebScreenshot from "../assests/scandiwebScreenshot.png";
import paylodeScreenshot from "../assests/paylodeAssessmentScreenshot.png";
import dmsScreenshot from "../assests/dataManagementSolutionLoginScreenshot.png";
import pokedexScreenshot from "../assests/pokedexScreenshot.png";
import mernRecipeAppScreenshot from "../assests/mernRecipeAppScreenshot.png";

const Projects = () => {
	const projectHeaderProps = {
		header: "projects",
		paragraph:
			"Here you will find some of the personal & clients projects that I created with each project containing links to a github repo and live demo",
	};

	const projectContentProps = [
		{
			title: "MERN Recipe App",
			description:
				"A fullstack webapp with user authentication. Built with MERN stack, TS & SCSS",
			img: mernRecipeAppScreenshot,
			liveDemo: "https://mern-recipe-app-alexola-ng.vercel.app/",
			githubRepo: "https://github.com/AlexOla-NG/MERN-RecipeApp",
			skills: ["Node JS", "Express JS", "Mongo DB", "React TS", "SCSS"],
		},
		{
			title: "Pokedex",
			description:
				"A frontend UI for rendering data from the pokeapi API. Built with React TS & SCSS",
			img: pokedexScreenshot,
			liveDemo: "https://pokedex-alexola-ng.vercel.app/",
			githubRepo: "https://github.com/AlexOla-NG/pokedex",
			skills: ["React TS", "SCSS", "API"],
		},
		{
			title: "Movie App",
			description:
				"A movie clone app that queries themoviedb API. Built with React TS & SCSS",
			img: paylodeScreenshot,
			liveDemo: "https://paylode-products.vercel.app/",
			githubRepo: "https://github.com/AlexOla-NG/paylode-products",
			skills: ["React TS", "SCSS", "API"],
		},
		{
			title: "Data Management Solution Dashboard",
			description:
				"Frontend UI for a data management solution platform. Built with React JS & Material UI",
			img: dmsScreenshot,
			liveDemo: "https://data-management-solution.vercel.app/",
			githubRepo:
				"https://github.com/AlexOla-NG/Data-Management-Solution",
			skills: ["React JS", "Material UI"],
		},
		{
			title: "Lendsqr Dashboard",
			description:
				"A react app with login, dashboard & user details pages. Built with React TS & SCSS",
			img: lendsqrLoginScreenshot,
			liveDemo: "https://alexander-oweka-lendsqr-fe-test.vercel.app/",
			githubRepo: "https://github.com/AlexOla-NG/lendsqr-fe-test",
			skills: ["React TS", "SCSS", "API"],
		},
		{
			title: "Scandiweb Assessment",
			description:
				"A basic fullstack app with CRUD functionality. Built with React frontend, PHP backend, & MySQL database.",
			img: scandiwebScreenshot,
			liveDemo: "https://juniortest-alexander-oweka.000webhostapp.com/",
			githubRepo:
				"https://github.com/AlexOla-NG/scandiweb-junior-dev-test",
			skills: ["React TS", "SCSS", "PHP", "MySQL"],
		},
		{
			title: "URL Shortening API Landing Page",
			description: "For when you need to shorten url links.",
			img: shortlyScreenshot,
			liveDemo: "https://u6vmnn.csb.app/",
			githubRepo:
				"https://github.com/AlexOla-NG/React-Project-URL-API-Landing-Page",
			skills: ["React JS", "Material UI", "CSS", "API"],
		},
		{
			title: "Advice Generator",
			description: "Roll the die, get a random advice.",
			img: randomAdviceScreenshot,
			liveDemo:
				"https://alexola-ng.github.io/Projects/advice-generator-app-main/index.html",
			githubRepo:
				"https://github.com/AlexOla-NG/Projects/tree/main/advice-generator-app-main",
			skills: ["HTML", "CSS", "Javascript", "API"],
		},
	];

	const getProject = () => {
		return projectContentProps.map((project, index) => {
			return <SingleProject key={index} {...project} />;
		});
	};

	return (
		<motion.section
			className="projects-section-wrapper"
			id="projects"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			<ReusableHeader {...projectHeaderProps} />
			<div>{getProject()}</div>
		</motion.section>
	);
};

export default Projects;

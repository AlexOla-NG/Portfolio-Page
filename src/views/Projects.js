import React from "react";
import ReusableHeader from "../components/ReusableHeader";
import SingleProject from "../components/projects/SingleProject";

import shortlyScreenshot from "../assests/shortlyDesktopPreview.jpg";
import randomAdviceScreenshot from "../assests/adviceGenDesktopPreview.jpg";
import lendsqrLoginScreenshot from "../assests/lendsqrLoginScreenshot.png";
import scandiwebScreenshot from "../assests/scandiwebScreenshot.png";

const Projects = () => {
  const projectHeaderProps = {
    header: "projects",
    paragraph:
      "Here you will find some of the personal & clients projects that I created with each project containing links to a github repo and live demo",
  };

  const projectContentProps = [
    {
      title: "Lendsqr Dashboard",
      description:
        "A react app comprising login, dashboard & user details pages.",
      img: lendsqrLoginScreenshot,
      liveDemo: "https://alexander-oweka-lendsqr-fe-test.vercel.app/login",
      githubRepo: "https://github.com/AlexOla-NG/lendsqr-fe-test",
      skills: ["React TS", "SCSS", "API"],
    },
    {
      title: "Scandiweb Assessment",
      description:
        "A basic fullstack app with CRUD functionality. Built with React frontend, PHP backend, & MySQL database.",
      img: scandiwebScreenshot,
      liveDemo: "https://juniortest-alexander-oweka.000webhostapp.com/",
      githubRepo: "https://github.com/AlexOla-NG/scandiweb-junior-dev-test",
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
    <section className="projects-section-wrapper" id="projects">
      <ReusableHeader {...projectHeaderProps} />
      <div>{getProject()}</div>
    </section>
  );
};

export default Projects;

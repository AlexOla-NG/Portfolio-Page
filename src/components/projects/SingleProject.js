import React from "react";
import shortlyScreenshot from "../../assests/shortlyScreenshot.png";
import Tag from "../about/Tag";

const SingleProject = (props) => {
  const getSkills = () => {
    return props.skills.map((skill) => {
      return <Tag key={skill} text={skill} />;
    });
  };

  return (
    <article className="single-project-wrapper">
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="skills-wrapper">{getSkills()}</div>
      </div>
      <div className="overlay-wrapper">
        <img src={props.img} alt={props.title} loading="lazy" />
        <div className="btn-wrapper overlay title-overlay">
          <button className="btn text">
            <a href={props.liveDemo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </button>
          <button className="btn text">
            <a href={props.githubRepo} target="_blank" rel="noreferrer">
              Github Repo
            </a>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;

SingleProject.defaultProps = {
  title: "URL Shortening API Landing Page",
  description: `For when you need to shorten url links. This project is a coding challenge from frontendmentor.io`,
  source: `frontendmentor.io`,
  img: shortlyScreenshot,
  liveDemo: "https://u6vmnn.csb.app/",
  githubRepo:
    "https://github.com/AlexOla-NG/React-Project-URL-API-Landing-Page",
  skills: ["React JS", "Material UI", "CSS", "RESTful API"],
};

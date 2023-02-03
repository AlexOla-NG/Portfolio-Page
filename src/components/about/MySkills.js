import React from "react";
import Tag from "./Tag";

const MySkills = () => {
  const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "TypeScript",
    "JavaScript",
    "React.TS",
    "React.JS",
    "php",
    "MySQL",
    "Material UI",
    "WordPress Development",
    "Git",
    "GitHub",
  ];

  const getSkills = () => {
    return skills.map((skill) => <Tag key={skill} text={skill} />);
  };

  return (
    <article className="more-info-wrapper">
      <h3>My Tech stack</h3>
      <div className="skills-wrapper">{getSkills()}</div>
    </article>
  );
};

export default MySkills;

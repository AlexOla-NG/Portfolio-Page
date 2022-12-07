import React from "react";
import Tag from "./Tag";

const MySkills = () => {
  const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "TypeScript",
    "JavaScript",
    "React",
    "Material UI",
    "php",
    "WordPress",
    "Git",
    "GitHub",
    "Responsive Design",
    "Terminal",
    "Troubleshooting",
    "Research",
  ];

  const getSkills = () => {
    return skills.map((skill) => <Tag key={skill} text={skill} />);
  };

  return (
    <article className="more-info-wrapper">
      <h3>My Skills</h3>
      <div className="skills-wrapper">{getSkills()}</div>
    </article>
  );
};

export default MySkills;

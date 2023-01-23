import React from "react";
import ReusableHeader from "../components/ReusableHeader";
import MoreInfo from "../components/about/MoreInfo";
import MySkills from "../components/about/MySkills";

const About = () => {
  return (
    <section className="about-section-wrapper" id="about">
      <ReusableHeader />
      <div>
        <MoreInfo />
        <MySkills />
      </div>
    </section>
  );
};

export default About;

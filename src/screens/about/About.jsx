import React from "react";
import Banner from "../../components/Banner";
import Trainer from "../../components/Trainer";
 import BreadCrumb from "../../components/about/Breadcrumb";
import AboutSection from "../../components/about/AboutSection";
import AboutCounter from "../../components/about/AboutCounter";

const About = () => {
  return (
    <div>
      <BreadCrumb title="About" />
      <AboutSection />
      <AboutCounter />
      <Trainer />
      {/* <div style={{ marginBottom: "40px" }}> */}
      {/* <Banner /> */}
      {/* </div> */}
    </div>
  );
};

export default About;

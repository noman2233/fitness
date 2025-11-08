import React from "react";
import Banner from "../../components/Banner";
import Trainer from "../../components/Trainer";
import FooterBanner from "../../components/FooterBanner";
import BreadCrumb from "../../components/contact/BreadCrumb";
import AboutSection from "../../components/about/AboutSection";
import AboutCounter from "../../components/about/AboutCounter";

const About = () => {
  return (
    <div>
      <BreadCrumb />
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

import React from "react";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import About from "../../components/About";
import Services from "../../components/Services";
// import ClassSection from "../../components/ClassSection";
import Trainer from "../../components/Trainer";
// import Testimonial from "../../components/Testimonial";
import Membership from "../../components/Membership";
import Registration from "../../components/Registration";
import Blog from "../../components/Blog";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Services />
      {/* <ClassSection /> */}
      <Trainer />
      {/* <Testimonial /> */}
      <Banner />
      <Membership />
      <Registration />
      <Blog />
    </div>
  );
};

export default Home;

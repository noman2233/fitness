import React from "react";
import BlogSection from "../../components/blog/BlogSection";
import BreadCrumb from "../../components/about/BreadCrumb";

const Blog = () => {
  return (
    <div>
      <BreadCrumb title="About" />
      <BlogSection />
    </div>
  );
};

export default Blog;

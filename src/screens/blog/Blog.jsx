import React from "react";
import BlogSection from "../../components/blog/BlogSection";
import BreadCrumb from "../../components/about/Breadcrumb";

const Blog = () => {
  return (
    <div>
      <BreadCrumb title="Blogs" />
      <BlogSection />
    </div>
  );
};

export default Blog;

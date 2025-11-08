import React from "react";
import BreadCrumb from "../../components/about/Breadcrumb";
import GalleryImages from "../../components/gallery/Gallery";

const Gallery = () => {
  return (
    <div>
      <BreadCrumb title="Gallery" />
      <GalleryImages />
    </div>
  );
};

export default Gallery;

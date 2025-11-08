import React from "react";

const BreadCrumb = ({ title = "About" }) => {
  return (
    <section
      class="breadcrumb-section set-bg"
      data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text">
              <h2>{title}</h2>
              <div class="breadcrumb-option">
                <a href="./index.html">
                  <i class="fa fa-home"></i> Home
                </a>
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;

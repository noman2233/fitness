import React from "react";

const Banner = () => {
  return (
    <section
      class="banner-section set-bg"
      style={{
        backgroundImage:
          "url('https://themewagon.github.io/gutim/img/banner-bg.jpg')",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-text">
              <h2>Get training today</h2>
              <p>
                Gimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard.
              </p>
              <a href="#" class="primary-btn banner-btn">
                Contact Now
              </a>
            </div>
          </div>
          <div class="col-lg-5">
            <img
              src="https://themewagon.github.io/gutim/img/banner-person.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

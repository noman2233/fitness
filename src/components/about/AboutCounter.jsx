import React from "react";

const AboutCounter = () => {
  return (
    <div class="about-counter">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="about-counter-text d-flex align-item-center justify-content-center">
              <div class="single-counter">
                <h1 class="counter-num count">20</h1>
                <p>Programs</p>
              </div>
              {/* <div class="single-counter">
                <h1 class="counter-num count">14</h1>
                <p>Locations</p>
              </div> */}
              <div class="single-counter">
                <h1 class="counter-num count">50</h1>
                <span>k+</span>
                <p>Members</p>
              </div>
              <div class="single-counter">
                <h1 class="counter-num count">34</h1>
                <p>Coaches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;

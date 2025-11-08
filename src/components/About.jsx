import React from "react";

const About = () => {
  return (
    <section
      class="about-section spad"
      
    >
      <div class="container">
        <div class="row" data-aos="fade-up">
          <div class="col-lg-6">
            <div class="about-pic">
              <img
                src="https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                className="img_border_radius"
              />
              <a
                href="https://www.youtube.com/watch?v=SlPhMPnQ58k"
                class="play-btn video-popup"
              >
                {/* <img src="https://themewagon.github.io/gutim/img/about-pic.jpg" alt=""/> */}
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-text">
              <h2>Story About Us</h2>
              <p class="first-para">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                pretium sollicitudin, nascetur auci elit consequat ipsutissem
                niuis sed odio sit amet nibh vulputate cursus a amet.
              </p>
              <p class="second-para">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
                tempus, tellus eget condimentum rhoncus, gravida quam semper
                libero sit amet.
              </p>
              <a href="/about" class="primary-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

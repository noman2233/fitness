import React from "react";

const Blog = () => {
  return (
    <section class="latest-blog-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Latest Blog</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-blog-item">
              <img
                src="https://thumbs.dreamstime.com/b/health-fitness-gym-workout-closeup-drink-food-slim-72401573.jpg"
                alt=""
              />
              <div class="blog-widget">
                <div class="bw-date">February 17, 2019</div>
                <a href="/blogdetail/123" class="tag">
                  #Gym
                </a>
              </div>
              <h4>
                <a href="/blogdetail/123">
                  10 States At Risk of Rural Hospital Closures
                </a>
              </h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-blog-item">
              <img
                src="https://1upnutrition.com/cdn/shop/articles/Healthy_Habits_For_Life_9_Tips_For_Better_Fitness_600x400_crop_center.progressive.jpg?v=1633117323"
                alt=""
              />
              <div class="blog-widget">
                <div class="bw-date">February 17, 2019</div>
                <a href="/blogdetail/123" class="tag">
                  #Sport
                </a>
              </div>
              <h4>
                <a href="/blogdetail/123">
                  Diver who helped save Thai soccer team
                </a>
              </h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-blog-item">
              <img
                src="https://img.freepik.com/premium-photo/exercise-floor-kettlebell-with-bodybuilder-man-gym-weightlifting-workout-routine-fitness-hands-strong-with-male-athlete-holding-weight-sports-club-while-training_590464-193023.jpg"
                alt=""
              />
              <div class="blog-widget">
                <div class="bw-date">February 17, 2019</div>
                <a href="/blogdetail/123" class="tag">
                  #Body
                </a>
              </div>
              <h4>
                <a href="/blogdetail/123">
                  Man gets life in prison for stabbing
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from "react";

const GalleryImages = () => {
  return (
    <div class="gallery-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="gallery-controls">
              <li class="active" data-filter=".all">
                all gallery
              </li>
              <li data-filter=".fitness">fitness</li>
              <li data-filter=".coaching">coaching</li>
              <li data-filter=".event">event</li>
              <li data-filter=".other">other</li>
            </ul>
          </div>
        </div>
        <div class="row gallery-filter">
          <div class="col-lg-6 mix all fitness">
            <img
              src="https://preview.colorlib.com/theme/gutim/img/gallery/gallery-1.jpg"
              alt=""
                style={{ borderRadius: "10px" }}
                className="img_border_radius"
                
            />
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-6 mix all fitness coaching">
                <img
                  src="https://preview.colorlib.com/theme/gutim/img/gallery/gallery-2.jpg"
                  alt="/"
                    style={{ borderRadius: "10px" }}
                />
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-lg-12 mix all coaching">
                    <img
                      src="https://preview.colorlib.com/theme/gutim/img/gallery/gallery-3.jpg"
                      alt=""
                        style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div class="col-lg-12 mix all coaching">
                    <img
                      src="https://preview.colorlib.com/theme/gutim/img/gallery/gallery-4.jpg"
                      alt=""
                        style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-6 mix all other rounded-2">
                <img
                  src="https://preview.colorlib.com/theme/gutim/img/gallery/gallery-5.jpg"
                    style={{ borderRadius: "10px" }}
                  alt=""
                />
              </div>
              <div class="col-lg-6 mix all other rounded-2">
                <img
                  src="https://preview.colorlib.com/theme/gutim/img/gallery/gallery-6.jpg"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 mix all event rounded-2">
            <img
              src="https://preview.colorlib.com/theme/gutim/img/gallery/gallery-7.jpg"
              alt=""
                style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;

import React from 'react'

const AboutSection = () => {
  return (
     <section class="about-section about-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-pic">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzNJlyoiROvSFRBIsnk2cmg-8Togln58OXGDz2rWb6IpWHJXpO838l5YIzDTCdwv7ePY&usqp=CAU" alt=""/>
                        <a href="" class="play-btn video-popup">
                            <img src="https://www.youtube.com/watch?v=SlPhMPnQ58k" alt=""/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-text">
                        <h2>Story About Us</h2>
                        <p class="first-para">Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
                            sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate
                            cursus a amet.</p>
                        <p class="second-para">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
                            quam semper libero sit amet.</p>
                        <img src="img/about-signature.png" alt=""/>
                        <div class="at-author">
                            <h4>Lettie Chavez</h4>
                            <span>CEO - Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection

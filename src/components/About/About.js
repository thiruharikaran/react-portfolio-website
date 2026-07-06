import React from "react";
import "./about.css";
import about from "../../Image/About-Image.png";

import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
} from "react-icons/hi";

import Fade from "react-reveal/Fade";

function About() {
  return (
    <section className="container about-section" id="about">
      <div className="row align-items-center">

        <Fade left>
          <div className="col-lg-5 col-md-12">
            <div className="about-image">
              <img
                src={about}
                alt="THR Technologies"
                className="img-fluid"
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-lg-7 col-md-12">

            <div className="about-details">

              <div className="about-title">

                <h2>About THR Technologies</h2>

                <span className="line"></span>

                <p className="about-subtitle">
                  Building secure, scalable and innovative software solutions
                  for modern businesses.
                </p>

              </div>

              <p className="about-description">
                THR Technologies is a software development company specializing
                in modern web applications, enterprise software, cloud
                solutions and digital transformation.

                <br />
                <br />

                Our team combines industry best practices with modern
                technologies to deliver secure, scalable and
                high-performance applications tailored to each client's
                business requirements.
              </p>

              <div className="card-design">

                <div className="about-list-item">

                  <div className="about-details-icon">
                    <HiOutlineCode size={34} />
                  </div>

                  <div>

                    <h5>Our Expertise</h5>

                    <ul>
                      <li>Custom Software Development</li>
                      <li>Business Automation</li>
                      <li>Web Applications</li>
                      <li>Enterprise Solutions</li>
                    </ul>

                  </div>

                </div>

              </div>

              <div className="card-design">

                <div className="about-list-item">

                  <div className="about-details-icon">
                    <HiOutlineLightningBolt size={34} />
                  </div>

                  <div>

                    <h5>Our Mission</h5>

                    <p>
                      Deliver secure, scalable and innovative software
                      solutions that help businesses improve efficiency,
                      accelerate growth and embrace digital transformation.
                    </p>

                  </div>

                </div>

              </div>

              <div className="card-design">

                <div className="about-list-item">

                  <div className="about-details-icon">
                    <HiOutlineShieldCheck size={34} />
                  </div>

                  <div>

                    <h5>Why Choose THR Technologies</h5>

                    <ul>
                      <li>Experienced Developers</li>
                      <li>Modern Technologies</li>
                      <li>Agile Development</li>
                      <li>Secure Architecture</li>
                      <li>On-Time Delivery</li>
                      <li>Long-Term Support</li>
                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </Fade>

      </div>
    </section>
  );
}

export default About;
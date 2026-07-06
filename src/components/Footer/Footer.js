import React from "react";
import "./footer.css";
import Logo from "../../Image/Logo.png";
import Zoom from "react-reveal/Zoom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Enterprise Solutions",
    "API Development",
    "UI / UX Design",
    "Cloud Solutions",
  ];

  const quickLinks = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Tech Stack",
      href: "#techstack",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="footer">

      <div className="container">

        <Zoom>

          <div className="row">

            {/* Company Info */}

            <div className="col-lg-4 col-md-12 mb-5">

              <div className="footer-company">

                <img
                  src={Logo}
                  alt="THR Technologies"
                  className="footer-logo"
                />

                <h3>THR Technologies</h3>

                <p>
                  THR Technologies is a modern software development company
                  delivering innovative digital solutions for startups,
                  enterprises, and businesses worldwide.
                </p>

                <div className="footer-social">

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

            </div>

            {/* Services */}

            <div className="col-lg-4 col-md-6 mb-5">

              <div className="footer-links">

                <h4>Our Services</h4>

                <ul>

                  {services.map((service, index) => (

                    <li key={index}>

                      <FaArrowRight className="footer-arrow" />

                      {service}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

                        {/* Quick Links & Contact */}

            <div className="col-lg-4 col-md-6 mb-5">

              <div className="footer-links">

                <h4>Quick Links</h4>

                <ul>

                  {quickLinks.map((link, index) => (

                    <li key={index}>

                      <FaArrowRight className="footer-arrow" />

                      <a href={link.href}>
                        {link.title}
                      </a>

                    </li>

                  ))}

                </ul>

                <div className="footer-contact">

                  <h5>Contact</h5>

                  <p>

                    <FaEnvelope className="footer-contact-icon" />

                    contact@thrtechnologies.com

                  </p>

                  <p>

                    <FaGlobe className="footer-contact-icon" />

                    www.thrtechnologies.com

                  </p>

                </div>

              </div>

            </div>

          </div>

          <hr className="footer-divider" />

          <div className="footer-bottom">

            <p>

              © {new Date().getFullYear()} THR Technologies.
              All Rights Reserved.

            </p>

            <p>

              Designed & Developed with ❤️ by
              <strong> THR Technologies</strong>

            </p>

          </div>

        </Zoom>

      </div>

    </footer>

  );
};

export default Footer;
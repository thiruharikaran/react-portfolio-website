import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import Logo from "../../Image/Logo.png";

const Navbar = () => {
  const [navScrollColor, setNavScrollcolor] = useState(false);
  const onChangeNavColor = () => {
    if (window.scrollY >= 100) {
      setNavScrollcolor(true);
    } else {
      setNavScrollcolor(false);
    }
  };
  window.addEventListener("scroll", onChangeNavColor);
  return (
    <nav
      className={
        navScrollColor ? "navbar-scroll-color navbar-main" : "navbar-main"
      }
    ><div className="navbar-logo">
      <img src={Logo} alt="THR Technologies"/>
    </div>
      <ul>
        <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Services
          </Link>
        </li>


        <li className="nav-item">
          <Link to="team" spy={true} smooth={true} offset={-100} duration={100}>
            Tech Stack
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Testimonials
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

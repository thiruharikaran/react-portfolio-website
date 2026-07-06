import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Home = ({ theme, handleChangeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      
      <Fade left big>
        <div className="container home-content"><h4>THR Technologies</h4>
          <h1>
            
            <Typewriter
  options={{
    strings: [
"Build Modern Web Applications",
"Create Powerful Business Software",
"Scale with Cloud Solutions",
"Transform Your Ideas Into Products"
],
    autoStart: true,
    loop: true,
    deleteSpeed: 20,
  }}
/>
          </h1>
          <p>
            We build scalable web applications, enterprise software,
REST APIs and cloud solutions that help startups
and businesses grow faster.</p>
          
          <div className="hero-buttons">
    <span className="view-details-home-button">
        Explore Services
    </span>

    <span className="view-details-home-button" to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}>
        Contact Us
    </span>
</div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;

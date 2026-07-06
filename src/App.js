import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Service from "./components/Service/Service.js";
import NavbarMobileView from "./components/Navbar/NavbarMobileView.js";
import Testimonial from "./components/Testimonial/Testimonial.js";
import Footer from "./components/Footer/Footer.js";
import Contact from "./components/Contact/Contact.js";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import TechStack from "./components/TechStack/TechStack.js";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Navbar />
      <NavbarMobileView theme={theme} handleChangeTheme={handleChangeTheme} />
      <Home theme={theme} handleChangeTheme={handleChangeTheme} />
      <div className="main-theme-compo" id={theme}>
        <About />
        <Service />
        
        <TechStack />
        <Testimonial />
        
        <Contact />
      </div>



      <Footer />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;

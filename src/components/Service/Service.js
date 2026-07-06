import React from "react";
import "./service.css";
import Zoom from "react-reveal/Zoom";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaShoppingCart,
  FaCloud,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Web Development",
    description:
      "We build modern, responsive and high-performance websites tailored to your business goals.",
    features: [
      "Business Websites",
      "Landing Pages",
      "Responsive Design",
      "SEO Friendly",
    ],
  },
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "Interactive and responsive user interfaces built with modern frontend technologies.",
    features: [
      "React.js",
      "Admin Dashboards",
      "Responsive UI",
      "Single Page Apps",
    ],
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Secure and scalable backend systems that power modern web applications.",
    features: [
      "REST APIs",
      "Authentication",
      "Node.js",
      "Database Integration",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Database Solutions",
    description:
      "Reliable database architecture designed for speed, scalability and security.",
    features: [
      "MongoDB",
      "MySQL",
      "Database Design",
      "Data Management",
    ],
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Solutions",
    description:
      "Complete online shopping platforms with secure payment integration.",
    features: [
      "Payment Gateway",
      "Product Management",
      "User Accounts",
      "Order Tracking",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud Deployment",
    description:
      "Deploy and manage applications using modern cloud infrastructure.",
    features: [
      "Cloud Hosting",
      "Server Configuration",
      "Storage",
      "Domain Setup",
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Application Security",
    description:
      "Protect your applications with industry-standard security practices.",
    features: [
      "Data Encryption",
      "Input Validation",
      "Access Control",
      "Security Audits",
    ],
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, updates and technical support after deployment.",
    features: [
      "Bug Fixes",
      "Performance",
      "Maintenance",
      "Technical Support",
    ],
  },
];

const Service = () => {
  return (
    <section className="container service-section" id="service">
      <div className="section_title">
        <h2>Our Services</h2>

        <span className="line"></span>

        <p className="service-subtitle">
          End-to-end software development services designed to help
          businesses build secure, scalable and modern digital solutions.
        </p>
      </div>

      <div className="row">
        {services.map((service, index) => (
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
          >
            <Zoom>
              <div className="services">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-list">
                  {service.features.map((feature, i) => (
                    <div className="service-item" key={i}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Zoom>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
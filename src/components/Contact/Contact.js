import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

import {
  FaPaperPlane,
  FaEnvelope,
  FaLaptopCode,
} from "react-icons/fa";

import Fade from "react-reveal/Fade";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs.sendForm(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form.current,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        setLoading(false);

        setSuccess(
          "Thank you! Your inquiry has been received. We'll get back to you as soon as possible."
        );

        form.current.reset();
      })
      .catch(() => {
        setLoading(false);

        setError(
          "Something went wrong while sending your message. Please try again later."
        );
      });
  };

  return (
    <section
      className="container contact-section"
      id="contact"
    >
      <div className="row align-items-center">

        {/* Left Side Image */}

        <Fade left>
          <div className="col-lg-5 mb-5 mb-lg-0">

            <div className="image-class">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                alt="Software Development Team"
              />

            </div>

          </div>
        </Fade>

        {/* Contact Form */}

        <Fade right>
          <div className="col-lg-7">

            <div className="contact-form-design">

              <div className="text-center mb-4">

                <h2>
                  Let's Build Something Together
                </h2>

                <span className="line"></span>

                <p className="contact-subtitle">
                  Looking for a reliable software development
                  partner? Tell us about your project and
                  we'll get back to you shortly.
                </p>

              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
              >

                <div className="contact-form">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Smith"
                    required
                  />

                </div>

                <div className="contact-form">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                  />

                </div>

                <div className="contact-form">

                  <label>
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Website Development"
                    required
                  />

                </div>

                <div className="contact-form">

                  <label>
                    Project Type
                  </label>

                  <select
                    className="custom-select"
                    name="project_type"
                    required
                  >
                    <option value="">
                      Select a Service
                    </option>

                    <option>
                      Business Website
                    </option>

                    <option>
                      Web Application
                    </option>

                    <option>
                      Enterprise Software
                    </option>

                    <option>
                      API Development
                    </option>

                    <option>
                      UI / UX Design
                    </option>

                    <option>
                      Mobile Application
                    </option>

                    <option>
                      Cloud Solution
                    </option>

                    <option>
                      Other
                    </option>

                  </select>

                </div>

                <div className="contact-form">

                  <label>
                    Project Details
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Describe your project requirements..."
                    required
                  ></textarea>

                </div>
                                {success && (
                  <div className="alert alert-success mt-3">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger mt-3">
                    {error}
                  </div>
                )}

                <div className="button-submit">

                  <button
                    type="submit"
                    disabled={loading}
                    className="submit-btn"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="ms-2" />
                      </>
                    )}
                  </button>

                </div>

              </form>

              <div className="contact-info mt-5">

                <div className="contact-item d-flex align-items-start mb-4">

                  <FaEnvelope
                    className="contact-icon me-3"
                    size={28}
                  />

                  <div>

                    <h5>Email</h5>

                    <p>
                      thiruharikaran.dev@gmail.com
                    </p>

                  </div>

                </div>

                <div className="contact-item d-flex align-items-start">

                  <FaLaptopCode
                    className="contact-icon me-3"
                    size={28}
                  />

                  <div>

                    <h5>Our Expertise</h5>

                    <p>
                      Custom Software Development,
                      Business Websites,
                      Web Applications,
                      Enterprise Solutions,
                      API Development,
                      UI / UX Design,
                      Cloud Solutions
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Fade>

      </div>

    </section>
        
  );
};

export default Contact;
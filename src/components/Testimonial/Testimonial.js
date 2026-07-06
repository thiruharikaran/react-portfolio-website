import React from "react";
import "./testimonial.css";
import Fade from "react-reveal/Fade";

const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Small Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    review:
      "THR Technologies delivered a modern, responsive website that exceeded our expectations. The team was professional and delivered the project on time.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    review:
      "Excellent communication throughout the project. Their expertise in React and Node.js helped us launch our platform quickly and efficiently.",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Business Consultant",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    review:
      "Reliable, skilled, and easy to work with. I highly recommend THR Technologies for custom software and web application development.",
  },
];

const Testimonial = () => {
  return (
    <section className="container testimonial-section" id="testimonial">
      <div className="section_title">
        <h2>Testimonials</h2>
        <span className="line"></span>

        <p className="testimonial-subtitle">
          We are committed to delivering high-quality software solutions and
          exceptional client experiences.
        </p>
      </div>

      <div className="row">
        {testimonials.map((item) => (
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
            key={item.id}
          >
            <Fade bottom>
              <div className="testimonial-card">
                <img src={item.image} alt={item.name} />

                <p className="testimonial-review">
                  "{item.review}"
                </p>

                <h5>{item.name}</h5>

                <span>{item.role}</span>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
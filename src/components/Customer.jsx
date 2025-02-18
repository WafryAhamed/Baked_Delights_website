import React from "react";
import { motion } from "framer-motion";

const Customer = () => {
  return (
    <>
      <motion.section
        className="review"
        id="feedback"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="middle-text">
          <h1>What Our Happy Customers Say</h1>
          <h2>Glowing Reviews About Our Delectable Delights</h2>
        </div>
        <div className="review-content">
          <div className="box">
            <p>
              A true taste of heaven in every bite! The croissants are perfectly
              flaky, the cakes melt in your mouth, and every treat feels like a
              warm hug. I can’t get enough of Baked Delights!
            </p>
            <div className="in-box">
              <div className="bx-img">
                {/* Enforce consistent image size */}
                <img
                  src="img/r1.jpg"
                  alt="Customer 1"
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              <div className="bxx-text">
                <h4>David Bennett</h4>
                <h5>Food Enthusiast</h5>
                <div className="rating">
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              "Baked Delights never disappoints! Their pastries are always fresh,
              and the flavors are absolutely exquisite. A must-try for anyone with
              a sweet tooth!"
            </p>
            <div className="in-box">
              <div className="bx-img">
                {/* Enforce consistent image size */}
                <img
                  src="img/r2.png"
                  alt="Customer 2"
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              <div className="bxx-text">
                <h4>Sophia Turner</h4>
                <h5>Restaurant Critic</h5>
                <div className="rating">
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              "Every bite feels like a piece of heaven! I can't get enough of their
              fresh croissants and mouthwatering cakes. Truly a bakery that stands
              out."
            </p>
            <div className="in-box">
              <div className="bx-img">
                {/* Enforce consistent image size */}
                <img
                  src="img/r3.PNG"
                  alt="Customer 3"
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              <div className="bxx-text">
                <h4>Emily Davis</h4>
                <h5>Food Blogger</h5>
                <div className="rating">
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Customer;
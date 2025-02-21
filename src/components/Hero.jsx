import React from "react";
import { motion, px } from "framer-motion"; 
import "./ContactInfo.css";

const Hero = () => {
  return (
    <>
      <motion.section
        className="hero"
        id="home"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="hero-text">
          <h1> <br />
          Freshly Baked, <span>Delicious And</span>
            <br />
            Made With Love
            Every Day
          </h1>

          
        
        </div>

        <div className="hero-image">
        <img src="img/products/whitecake.png" alt="White Cake" />


            
        </div>
      </motion.section>

        {/* <!--container--> */}
        <motion.section
      className="contact-info-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, translateY: 1 }}
      transition={{ duration: 1.5, type: "ease-in" }}
    >
      <div className="contact-info-box">
        <img src="img/c1.png" alt="Clock Icon" />
        <h1>7:00 am - 9:00 pm</h1>
        <p>Our Bakery Hours</p>
      </div>
      <div className="contact-info-box">
        <img src="img/c2.png" alt="Location Icon" />
        <h1>123 Main Road, Mihintale</h1>
        <p>Find Us Here</p>
      </div>
      <div className="contact-info-box">
        <img src="img/c3.png" alt="Phone Icon" />
        <h1>+94 1231234123</h1>
        <p>Call to Order</p>
      </div>
    </motion.section>
      

          
    </>
  );
};

export default Hero;

import React from 'react'
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
        <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="about-img">
          <img src="img/products/cakes14.png" />
        </div>

        <div className="about-text">
        <h2>
    Freshly Baked, <br />
    Crafted with Love.
  </h2>
  <p>
    At Baked Delights, we believe that every bite should bring joy. 
    Our passion for baking drives us to create the finest cakes, pastries, and bread, 
    using only the freshest ingredients. Whether it’s a cozy morning treat or a special 
    celebration, we’re here to make every moment sweeter.
  </p>
          
        </div>
      </motion.section>

    </>
  )
}

export default AboutUs

import React from 'react'
import { motion } from "framer-motion";
import { FaLocationArrow, FaMobileAlt, FaBell } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
const Contact = () => {
  return (
    <>
        <motion.section
        className="contact"
        id="contact"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="contact-content">
          <div className="contact-img">
            <div className="c-one">
              <img src="img/f1.png" />
            </div>
            <div className="c-one">
              <img src="img/f2.png" />
              <div className="c-one"><FaDownload style={{ marginRight: "10px", fontSize: "1.5rem", color: "#007BFF" }} /><h1>Download Now</h1></div>
            </div>
            <div className="c-one">
              <img src="img/f3.png" /> 
              
            </div>  
          </div>

          <div className="contact-text">
            <h2>Get in Touch</h2>
            <p>
  Reach out to us, and we’ll be happy to assist! Whether you have questions about our freshly baked delights, need a custom order for a special occasion, or just want to say hello, we’re here for you. From warm, buttery croissants to beautifully crafted cakes, we take pride in delivering the best flavors to satisfy your cravings. Visit us, call, or message us—we’d love to hear from you! Let’s make every moment sweeter together, one delicious bite at a time!
</p>

            
          </div>

          <div className="details">
            <div className="main-d">
              <a href="#">
              <FaLocationArrow style={{ marginRight: "8px", color: "#ffff", fontSize: "1.3rem" }} />
                Main Street, Mihintale
              </a>
            </div>

            <div className="main-d">
              <a href="#">
              <FaMobileAlt style={{ marginRight: "8px", color: "green", fontSize: "1.3rem" }} />
              +94 1231234123
              </a>
            </div>

            <div className="main-d">
              <a href="#">
              <FaFacebook style={{ marginRight: "12px", fontSize: "1.3rem", color: "#3b5998" }} />
              <FaInstagram style={{ marginRight: "12px", fontSize: "1.3rem", color: "#C13584" }} />
              <FaYoutube style={{ marginRight: "12px", fontSize: "1.3rem", color: "#FF0000" }} />
              @BakedDelights_Mihintale
              </a>
            </div>

            <div className="main-d">
              <a href="#">
              <FaBell style={{ marginRight: "8px", color: "#ffff", fontSize: "1.3rem" }} />
                Follow us
                
               
  
              </a>
              
            </div>



           




          </div>
         
        </div>
        <div >
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
          © {new Date().getFullYear()} &nbsp;&nbsp; wfy_ahmd &nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved.
   
            
              
              
            </div>
        
      </motion.section>

      
    </>
    
  )
}

export default Contact

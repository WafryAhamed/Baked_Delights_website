import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { GiApothecary } from "react-icons/gi";
import { FaSearch, FaShoppingCart, FaUserCircle, FaBell } from "react-icons/fa";
import { FaHome, FaShoppingBag, FaUser, FaPhoneAlt } from 'react-icons/fa';
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>

const Header = ({ setSearchQuery }) => {
  const [count, setCount] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);

  const getMenuStyles = (menuOpened) => {
    return { top: menuOpened ? "100%" : "-400%" };
  };

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY > 80 ? setHeaderColor(true) : setHeaderColor(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to shop section
  const handleSearchFocus = () => {
    const shopSection = document.getElementById("shopSection");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={headerColor ? "sticky" : ""}>
        <nav className="navbar">
        <a
  href="#"
  onClick={() => setMenuOpened(false)}
  style={{
    fontFamily: "'Dancing Script', cursive",
    fontSize: "20px",
    color: "#555250", // Default text color (gray)
    textDecoration: "underline",
    position: "relative", // Allows positioning adjustments if needed
  }}
>
  {/* Icon */}
  <GiApothecary
    style={{
      marginRight: "5px",
      fontSize: "30px",
      width: "19px",
      height: "15px",
      color: "orange", // Orange icon
    }}
  />

  {/* Text */}
  <span style={{ color: "white" }}> {/* Default text color */}
    <span style={{ color: "orange" }}>B</span>aked{" "}
    <span style={{ color: "orange" }}>D</span>elights
  </span>
</a>
          <a href="#home" onClick={() => setMenuOpened(false)}>
            <FaHome style={{ marginRight: "3px", fontSize: "30px", width: "17px", height: "14px" }} />
            Home
          </a>
          <a href="#shopSection" onClick={() => setMenuOpened(false)}>
            <FaShoppingBag style={{ marginRight: "3px", fontSize: "30px", width: "17px", height: "14px" }} />
            Shopping
          </a>
          <a href="#contact" onClick={() => setMenuOpened(false)}>
            <FaPhoneAlt style={{ marginRight: "3px", fontSize: "30px", width: "17px", height: "14px" }} />
            Contact Us
          </a>

         
          
          
        </nav>

        {/* Add Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearchFocus(); // Scroll to the shop section on search input
          }}
          onFocus={handleSearchFocus} // Also trigger scroll when the input is focused
          style={{
            display: "flex",
            alignItems: "center",
            background: "#ffff",  
            borderRadius: "50px",  
            padding: "3px 1px",  
            border: "1px solid #ffff",  
            boxShadow: "0 2px 3px rgb(255, 255, 255)",  
            width: "280px",
          }}
        />
        {/* Icons id="shopSectionCake"  */}
        <a href="#shopSectionCake" ><FaSearch style={{ cursor: "pointer", color: "#FFFFFF", width: "36px", height: "27px"}} /></a>
        <a href="#shopSectionOFFER" ><FaBell style={{ cursor: "pointer", color: "#FFFFFF", fontSize: "1.2rem", marginLeft: "1px" }} /></a>
       
        <a href="/auth">  <FaUserCircle style={{ cursor: "pointer", color: "#FFFFFF", fontSize: "1.2rem", marginLeft: "1px" }} /></a>
       
        
        <a href="/cart">  <FaShoppingCart style={{ cursor: "pointer", color: "#FFFFFF", fontSize: "1.2rem", marginLeft: "1px" }} /></a>
      </header>
    </>
  );
};

export default Header;

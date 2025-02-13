import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Customer from "./components/Customer";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Route
import BuyPage from "./components/BuyPage"; // Import the new BuyPage component
import AuthPage from "./components/AuthPage"; // Import the new AuthPage component
import CartPage from "./components/CartPage"; // Import the new CartPage component

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Router> {/* Wrap the entire app with Router */}
      <Routes>
        {/* Default Route: Homepage */}
        <Route
          path="/"
          element={
            <>
              <Header setSearchQuery={setSearchQuery} />
              <Hero />
              <AboutUs />
              <Shop searchQuery={searchQuery} />
              <Customer />
              <Contact />
              <a href="#home" className="scroll">
                <i className="bx bx-up-arrow-alt"></i>
              </a>
            </>
          }
        />
        {/* Buy Page Route */}
        <Route path="/buy" element={<BuyPage />} />
        {/* Auth Page Route (Login/Signup) */}
        <Route path="/auth" element={<AuthPage />} />
        {/* Cart Page Route */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
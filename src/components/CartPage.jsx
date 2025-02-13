import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-page-container">
      <h1>Your cart is currently empty !</h1>
      <p style={{ color: "#888", fontSize: "18px", textAlign: "center" }}>
        No products in your cart.
      </p>
      {/* Go to Home Button */}
      <button
        className="go-to-home-button"
        onClick={() => navigate("/")} // Navigate to the homepage
      >
        Go to Home
      </button>
    </div>
  );
};

export default CartPage;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyPage = () => {
  // Extract query parameters from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Safely extract query parameters with fallback values
  const productName = queryParams.get("name") || "Product Name Not Found";
  const productPrice = queryParams.get("price") || "Price Not Available";
  const productDescription = queryParams.get("description") || "No description available.";
  // State to toggle between order summary and payment form
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  // State to show the confirmation message
  const [showConfirmation, setShowConfirmation] = useState(false);
  // Use navigate for redirection
  const navigate = useNavigate();
  // State for error messages
  const [errors, setErrors] = useState({});

  // Function to handle "Confirm Order" button click
  const handleConfirmOrder = () => {
    setShowPaymentForm(true); // Show the payment form
  };

  // Function to validate payment details
  const validatePaymentDetails = (cardNumber, expiryDate, cvv) => {
    const errors = {};
    // Validate card number (must be exactly 16 digits)
    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
      errors.cardNumber = "Card number must be exactly 16 digits.";
    }
    // Validate expiry date (must be in MM/YY format and a valid future date)
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    if (!expiryRegex.test(expiryDate)) {
      errors.expiryDate = "Expiry date must be in MM/YY format.";
    } else {
      const [month, year] = expiryDate.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Last two digits of the year
      const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
      if (
        parseInt(year, 10) < currentYear ||
        (parseInt(year, 10) === currentYear && parseInt(month, 10) < currentMonth)
      ) {
        errors.expiryDate = "Expiry date must be in the future.";
      }
    }
    // Validate CVV (must be exactly 3 digits)
    if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = "CVV must be exactly 3 digits.";
    }
    return errors;
  };

  // Function to handle "Pay Now" button click
  const handlePayNow = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Extract form values
    const cardNumber = e.target.cardNumber.value.replace(/\s/g, ""); // Remove spaces
    const expiryDate = e.target.expiryDate.value;
    const cvv = e.target.cvv.value;
    // Validate payment details
    const validationErrors = validatePaymentDetails(cardNumber, expiryDate, cvv);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return;
    }
    // Clear errors if validation passes
    setErrors({});
    // Proceed with payment
    setShowPaymentForm(false); // Hide the payment form
    setShowConfirmation(true); // Show the confirmation message
    // Redirect to the homepage after 3 seconds
    setTimeout(() => {
      navigate("/"); // Redirect to the homepage
    }, 3000); // 3 seconds delay
  };

  // Format card number with spaces after every 4 digits
  const formatCardNumber = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    const formatted = input
      .replace(/(\d{4})(?=\d)/g, "$1 ") // Add space after every 4 digits
      .substring(0, 19); // Limit to 16 digits + 3 spaces
    e.target.value = formatted; // Update the input value
  };

  // Format expiry date as MM/YY
  const formatExpiryDate = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    let formatted = input.substring(0, 4); // Limit to 4 digits
    if (formatted.length > 2) {
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`; // Add slash after MM
    }
    e.target.value = formatted; // Update the input value
  };

  return (
    <div className="buy-page-container">
      {/* Order Summary Section */}
      {!showPaymentForm && !showConfirmation ? (
        <>
          <h1 style={{ color: "black" }}>Order Summary</h1>
          <div className="product-details">
            <h2>{productName}</h2>
            <p>{productDescription}</p>
            <h3>Price: {productPrice}</h3>
            <button className="confirm-order" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </div>
        </>
      ) : null}
      {/* Payment Form Section */}
      {showPaymentForm && (
        <div className="payment-form">
          <h1 style={{ color: "black" }}>Payment Method</h1>
          <form onSubmit={handlePayNow}>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="Enter your card number (e.g., 1234 5678 9012 3456)"
                required
                onInput={formatCardNumber} // Format card number dynamically
              />
              {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                required
                onInput={formatExpiryDate} // Format expiry date dynamically
              />
              {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                required
                maxLength={3} // Limit CVV to 3 digits
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
            </div>
            <button type="submit" className="pay-button">
              Pay Now
            </button>
          </form>
        </div>
      )}
      {/* Confirmation Message Section */}
      {showConfirmation && (
        <div className="confirmation-message">
          <h1 style={{ color: "green" }}>Order Placed Successfully!</h1>
          <p>Your order will be delivered soon.</p>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
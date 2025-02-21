import React, { useState } from 'react';
import './Buy.css'; // Importing styles

const Buy = () => {
  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const productName = queryParams.get('name');
  const productPrice = queryParams.get('price');
  const productDescription = queryParams.get('description');

  // Ensure all required parameters are present
  if (!productName || !productPrice || !productDescription) {
    return (
      <div className="buy-page-container">
        <h1>Invalid Product Details</h1>
        <p>Please go back and select a valid product.</p>
      </div>
    );
  }

  // State to manage the display of the payment section
  const [showPaymentSection, setShowPaymentSection] = useState(false);

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});

  // State to manage the success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to handle "Confirm Order" button click
  const handleConfirmOrder = () => {
    setShowPaymentSection(true); // Show the payment section
  };

  // Function to validate form inputs
  const validateForm = (formData) => {
    const errors = {};

    // Validate Full Name
    if (!formData.name.trim()) {
      errors.name = 'Full Name is required.';
    }

    // Validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Validate Credit Card Number (16 digits)
    const cardRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (!formData.card.trim() || !cardRegex.test(formData.card)) {
      errors.card = 'Please enter a valid 16-digit credit card number.';
    }

    // Validate Expiry Date (future date in MM/YY format)
    const today = new Date();
    const [month, year] = formData.expiry.split('/').map(Number);
    if (
      !formData.expiry ||
      month > 12 ||
      month < 1 ||
      isNaN(year) ||
      year < today.getFullYear() % 100
    ) {
      errors.expiry = 'Please enter a valid future expiry date.';
    }

    // Validate CVV (3 digits)
    const cvvRegex = /^\d{3}$/;
    if (!formData.cvv.trim() || !cvvRegex.test(formData.cvv)) {
      errors.cvv = 'Please enter a valid 3-digit CVV.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      card: e.target.card.value,
      expiry: e.target.expiry.value,
      cvv: e.target.cvv.value,
    };

    // Validate form
    if (validateForm(formData)) {
      // Show success message
      setShowSuccessMessage(true);

      // Redirect to the main page after 3 seconds
      setTimeout(() => {
        window.location.href = '/'; // Redirect to the home page
      }, 3000);
    }
  };

  // Credit Card Input Formatting
  const formatCreditCard = (value) => {
    const numericValue = value.replace(/\D/g, '');
    const groups = numericValue.match(/.{1,4}/g);
    const formattedValue = groups ? groups.join(' ') : '';
    return formattedValue;
  };

  // Handle Credit Card Input Change
  const handleCardChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatCreditCard(rawValue);
    e.target.value = formattedValue;
  };

  // Expiry Date Input Formatting
  const formatExpiryDate = (value) => {
    const numericValue = value.replace(/\D/g, '');
    let formattedValue = numericValue.slice(0, 2);
    if (numericValue.length > 2) {
      formattedValue += '/' + numericValue.slice(2, 4);
    }
    return formattedValue;
  };

  // Handle Expiry Date Input Change
  const handleExpiryChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatExpiryDate(rawValue);
    e.target.value = formattedValue;
  };

  return (
    <div className="buy-page-container">
      {/* Close Button */}
      <button
        className="close-button"
        onClick={() => (window.location.href = '/')} // Redirect to main menu
      >
        X
      </button>

      {/* Product Confirmation Section */}
      <div className="buy-box">
        <h1>Confirm Your Order</h1>
        <div className="product-details">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <h3>Price: {productPrice}</h3>
        </div>
        <button className="confirm-order" onClick={handleConfirmOrder}>
          Confirm Order
        </button>
      </div>

      {/* Payment Section */}
      {showPaymentSection && (
        <div className="payment-section">
          <h1>Complete Your Payment</h1>
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
              {formErrors.name && <p className="error">{formErrors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="card">Credit Card Number:</label>
              <input
                type="text"
                id="card"
                placeholder="____ ____ ____ ____"
                maxLength={19} // 16 digits + 3 spaces
                required
                onChange={handleCardChange}
              />
              {formErrors.card && <p className="error">{formErrors.card}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Expiry Date:</label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                maxLength={5} // MM/YY format
                required
                onChange={handleExpiryChange}
              />
              {formErrors.expiry && <p className="error">{formErrors.expiry}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="password" id="cvv" placeholder="Enter CVV" maxLength={3} required />
              {formErrors.cvv && <p className="error">{formErrors.cvv}</p>}
            </div>
            <button type="submit" className="pay-now-button">
              Pay Now
            </button>
          </form>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="payment-section" style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2 style={{ color: 'green' }}>Successfully Ordered!</h2>
          <p>You will be redirected to the home page in 3 seconds...</p>
        </div>
      )}
    </div>
  );
};

export default Buy;
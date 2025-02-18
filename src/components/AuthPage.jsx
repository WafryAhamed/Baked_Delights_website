import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // State for phone number validation error
  const [phoneNumberError, setPhoneNumberError] = useState("");
  // Separate loading states for Google and Apple buttons
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isAppleLoading, setIsAppleLoading] = useState(false);

  // New state for password strength
  const [passwordStrength, setPasswordStrength] = useState("");

  // Handle form submission for Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "user@example.com" && password === "password123") {
      setIsLoggedIn(true);
      setUser({ email });
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  // Handle form submission for Signup
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const phoneNumber = e.target.phoneNumber.value;
    const address = e.target.address.value;

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Validate phone number before proceeding
    if (phoneNumberError) {
      return; // Prevent form submission if there's an error
    }

    alert(
      `Account created successfully for ${name} (${email})!\nPhone: ${phoneNumber}\nAddress: ${address}`
    );
    setIsLogin(true); // Switch to login form after signup
    navigate("/"); // Redirect to homepage after signup
  };

  // Phone number validation function
  const validatePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    const requiredDigitCount = 10; // Example: 10 digits for phone number
    if (!/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError("Phone number must contain only digits.");
      return;
    }
    if (phoneNumber.length !== requiredDigitCount) {
      setPhoneNumberError(`Phone number must have exactly ${requiredDigitCount} digits.`);
      return;
    }
    setPhoneNumberError(""); // Clear error if valid
  };

  // Password strength checker
  const checkPasswordStrength = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length >= 6 && password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    alert("You have been logged out.");
  };

  // Simulate Google/Gmail signup with loading indicator
  const handleGoogleSignup = () => {
    setIsGoogleLoading(true); // Show loading spinner for Google
    setTimeout(() => {
      setIsGoogleLoading(false); // Hide loading spinner after 2 seconds
      setIsLoggedIn(true);
      setUser({ email: "googleuser@example.com" });
      navigate("/");
    }, 2000); // Simulate a 2-second delay for the signup process
  };

  // Simulate Google/Gmail login with loading indicator
  const handleGoogleLogin = () => {
    setIsGoogleLoading(true); // Show loading spinner for Google
    setTimeout(() => {
      setIsGoogleLoading(false); // Hide loading spinner after 2 seconds
      setIsLoggedIn(true);
      setUser({ email: "googleuser@example.com" });
      navigate("/");
    }, 2000); // Simulate a 2-second delay for the login process
  };

  // Simulate Apple signup with loading indicator
  const handleAppleSignup = () => {
    setIsAppleLoading(true); // Show loading spinner for Apple
    setTimeout(() => {
      setIsAppleLoading(false); // Hide loading spinner after 2 seconds
      setIsLoggedIn(true);
      setUser({ email: "appleuser@example.com" });
      navigate("/");
    }, 2000); // Simulate a 2-second delay for the signup process
  };

  // Simulate Apple login with loading indicator
  const handleAppleLogin = () => {
    setIsAppleLoading(true); // Show loading spinner for Apple
    setTimeout(() => {
      setIsAppleLoading(false); // Hide loading spinner after 2 seconds
      setIsLoggedIn(true);
      setUser({ email: "appleuser@example.com" });
      navigate("/");
    }, 2000); // Simulate a 2-second delay for the login process
  };

  // Close button handler
  const handleClose = () => {
    navigate("/"); // Redirect to the main page
  };

  return (
    <div className="auth-page-container" style={{ position: "relative" }}>
      {/* Close Button */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "24px",
          fontWeight: "bold",
          color: "black", // Black color for visibility
          cursor: "pointer",
          zIndex: 10, // Ensure it stays on top of other elements
        }}
      >
        ×
      </button>

      <h1>{isLoggedIn ? "Welcome Back!" : isLogin ? "Login" : "Sign Up"}</h1>
      {/* Display user info if logged in */}
      {isLoggedIn && (
        <div className="user-info">
          <p>
            Logged in as: <strong>{user.email}</strong>
          </p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
      {/* Show login or signup form based on state */}
      {!isLoggedIn && (
        <form onSubmit={isLogin ? handleLogin : handleSignup} className="auth-form">
          {/* Additional fields for Sign Up */}
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  required
                  onBlur={validatePhoneNumber} // Add validation on blur
                />
                {phoneNumberError && (
                  <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                    {phoneNumberError}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" placeholder="Enter your address" required />
              </div>
            </>
          )}
          {/* Common fields for both Login and Sign Up */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={checkPasswordStrength} // Check password strength
            />
            {!isLogin && (
              <p
                style={{
                  color:
                    passwordStrength === "Weak"
                      ? "red"
                      : passwordStrength === "Medium"
                      ? "orange"
                      : "green",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                Password Strength: {passwordStrength || "None"}
              </p>
            )}
          </div>
          {/* Re-enter Password Field */}
          {!isLogin && (
            <div className="form-group">
              <label>Re-enter Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                required
              />
            </div>
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          {/* Google Signup/Login Button with Icon */}
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <button
              type="button"
              className="google-signup-button"
              onClick={isLogin ? handleGoogleLogin : handleGoogleSignup}
              disabled={isGoogleLoading} // Disable button while loading
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "8px 20px", // Fixed padding for consistent size
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "1px solid black", // Added black border
                borderRadius: "4px",
                cursor: isGoogleLoading ? "not-allowed" : "pointer",
                opacity: isGoogleLoading ? 0.7 : 1,
                width: "100%", // Match the length of the Login button
                height: "40px", // Fixed height to maintain size
              }}
            >
              {isGoogleLoading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%", // Ensure content takes full width
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid #f3f3f3",
                      borderTop: "3px solid rgb(219, 52, 52)",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                  <span style={{ fontSize: "14px" }}>
                    {isLogin ? "Signing in..." : "Signing up..."}
                  </span> {/* Smaller text */}
                </div>
              ) : (
                <>
                  <img
                    src="img/mail.png"
                    alt="Google Icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span style={{ fontSize: "14px" }}>
                    {isLogin ? "Sign in with Google" : "Sign up with Google"}
                  </span> {/* Consistent text size */}
                </>
              )}
            </button>
          </div>
          {/* Apple Signup/Login Button with Icon */}
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <button
              type="button"
              className="apple-signup-button"
              onClick={isLogin ? handleAppleLogin : handleAppleSignup}
              disabled={isAppleLoading} // Disable button while loading
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "8px 20px", // Fixed padding for consistent size
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "1px solid black", // Added black border
                borderRadius: "4px",
                cursor: isAppleLoading ? "not-allowed" : "pointer",
                opacity: isAppleLoading ? 0.7 : 1,
                width: "100%", // Match the length of the Login button
                height: "40px", // Fixed height to maintain size
              }}
            >
              {isAppleLoading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%", // Ensure content takes full width
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid #f3f3f3",
                      borderTop: "3px solid rgb(219, 52, 52)",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                  <span style={{ fontSize: "14px" }}>
                    {isLogin ? "Signing in..." : "Signing up..."}
                  </span> {/* Smaller text */}
                </div>
              ) : (
                <>
                  <img
                    src="img/applelogo.png"
                    alt="Apple Icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span style={{ fontSize: "14px" }}>
                    {isLogin ? "Sign in with Apple" : "Sign up with Apple"}
                  </span> {/* Consistent text size */}
                </>
              )}
            </button>
          </div>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="toggle-auth"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
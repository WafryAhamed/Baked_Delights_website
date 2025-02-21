import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css"; // Import the new CSS file

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Toggle forgot password form
  const [isLoading, setIsLoading] = useState(""); // Track which button is loading
  const navigate = useNavigate();

  // Handle form submission for Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validate password length (only for login)
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      setIsLoading("login"); // Show loading spinner for login
      setTimeout(() => {
        setIsLoading(""); // Hide loading spinner
        navigate("/"); // Redirect to the main page
      }, 2000); // Simulate a 2-second delay
    } else {
      alert("Invalid email or password.");
    }
  };

  // Handle form submission for Signup
  const handleSignup = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validate password length (only for signup)
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Validate phone number length
    if (phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsLoading("signup"); // Show loading spinner for signup
    setTimeout(() => {
      setIsLoading(""); // Hide loading spinner
      navigate("/"); // Redirect to the main page
    }, 2000); // Simulate a 2-second delay
  };

  // Handle Forgot Password Form Submission
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setIsLoading("forgot"); // Show loading spinner for forgot password
    setTimeout(() => {
      setIsLoading(""); // Hide loading spinner
      navigate("/"); // Redirect to the main page
    }, 2000); // Simulate a 2-second delay
  };

  // Social Login Button Handler
  const handleSocialLogin = (provider) => {
    setIsLoading(provider); // Show loading spinner for the clicked provider
    setTimeout(() => {
      setIsLoading(""); // Hide loading spinner
      navigate("/"); // Redirect to the main page
    }, 2000); // Simulate a 2-second delay
  };

  // Close button handler
  const handleClose = () => {
    navigate("/"); // Redirect to the main page
  };

  return (
    <div className="auth-modal-container">
      {/* Modal Container */}
      <div className="auth-modal">
        {/* Close Button - Moved to the corner of the form */}
        <button className="auth-modal-close" onClick={handleClose}>
          ×
        </button>
        {/* Logo - Centered */}
        <div style={{ textAlign: "center" }} className="auth-modal-logo">
          <img src="img/Logo1.PNG" alt="Logo" width="100" />
        </div>
        {/* Heading */}
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
        {/* Forgot Password Form */}
        {showForgotPassword && (
          <form className="auth-modal-form" onSubmit={handleForgotPassword}>
            <input type="email" placeholder="Enter your email *" required />
            <button type="submit" disabled={isLoading === "forgot"}>
              {isLoading === "forgot" ? (
                <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    border: "4px solid #f3f3f3",
                    borderTop: "4px solid green",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    animation: "spin 1s linear infinite",
                  }}
                ></div>
              </div>
              ) : (
                "Reset Password"
              )}
            </button>
            <button type="button" onClick={() => setShowForgotPassword(false)}>
              Cancel
            </button>
          </form>
        )}
        {/* Regular Forms */}
        {!showForgotPassword && (
          <>
            {/* Social Buttons Section - Added Images */}
            <div className="auth-modal-social-buttons">
              <button
                onClick={() => handleSocialLogin("Apple")}
                disabled={isLoading === "Apple"}
              >
                {isLoading === "Apple" ? (
                  <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      border: "4px solid #f3f3f3",
                      borderTop: "4px solid green",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                </div>
                ) : (
                  <>
                    <img src="img/applelogo.png" alt="Apple" width="20" style={{ marginBottom: "-4px" }}/>{" "}
                    {isLogin ? "Sign in with Apple" : "Sign up with Apple"}
                  </>
                )}
              </button>
              <button
                onClick={() => handleSocialLogin("Google")}
                disabled={isLoading === "Google"}
              >
                {isLoading === "Google" ? (
                  <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      border: "4px solid #f3f3f3",
                      borderTop: "4px solid green",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                </div>
                ) : (
                  <>
                    <img src="img/mail.png" alt="Google" width="25" style={{ marginBottom: "-6px" }}/>{" "}
                    {isLogin ? "Sign in with Google" : "Sign up with Google"}
                  </>
                )}
              </button>
              <button
                onClick={() => handleSocialLogin("Microsoft")}
                disabled={isLoading === "Microsoft"}
              >
                {isLoading === "Microsoft" ? (
                  <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      border: "4px solid #f3f3f3",
                      borderTop: "4px solid green",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                </div>
                ) : (
                  <>
                    <img src="img/microsoft.png" alt="Microsoft" width="25" style={{ marginBottom: "-9px" }} />{" "}
                    {isLogin ? "Sign in with Microsoft" : "Sign up with Microsoft"}
                  </>
                )}
              </button>
            </div>
            {/* OR Separator */}
            <div className="auth-modal-or-separator">
              <span>OR</span>
            </div>
            {/* Email/Password Form */}
            <form
              className="auth-modal-form"
              onSubmit={isLogin ? handleLogin : handleSignup}
            >
              {!isLogin && (
                <>
                  <input
                    type="text"
                    placeholder="First Name *"
                    name="firstName"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    name="lastName"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Address *"
                    name="address"
                    required
                  />
                  {/* Phone Input with Validation */}
                  <input
                    type="text"
                    placeholder="Phone * (10 digits)"
                    name="phone"
                    required
                    pattern="\d{10}" // Ensures exactly 10 digits
                    title="Please enter exactly 10 digits."
                  />
                </>
              )}
              <input
                type="email"
                placeholder="E-Mail *"
                name="email"
                required
              />
              {/* Password Field */}
              <div className="auth-modal-password-field">
                <input
                  type="password"
                  id="auth-modal-password"
                  placeholder="Password *"
                  name="password"
                  required
                  onInput={(e) => {
                    if (!isLogin) {
                      const password = e.target.value;
                      let strengthText = "";
                      let strengthColor = "";
                      if (password.length < 6) {
                        strengthText = "Weak";
                        strengthColor = "red";
                      } else if (password.length < 8) {
                        strengthText = "Moderate";
                        strengthColor = "orange";
                      } else {
                        strengthText = "Strong";
                        strengthColor = "green";
                      }
                      document.getElementById("password-strength").textContent =
                        strengthText;
                      document.getElementById(
                        "password-strength"
                      ).style.color = strengthColor;

                      // Check re-entered password match
                      const confirmPasswordField = document.getElementById(
                        "auth-modal-confirm-password"
                      );
                      const confirmPasswordError = document.getElementById(
                        "confirm-password-error"
                      );
                      if (
                        confirmPasswordField &&
                        confirmPasswordField.value &&
                        confirmPasswordField.value !== password
                      ) {
                        confirmPasswordError.textContent =
                          "Passwords do not match";
                        confirmPasswordError.style.color = "red";
                      } else {
                        confirmPasswordError.textContent = "";
                      }
                    }
                  }}
                />
                {/* Eye Icon */}
                <i
                  className="fa fa-eye-slash" // Default closed eye
                  id="auth-modal-toggle-password"
                  onClick={() =>
                    togglePasswordVisibility(
                      "auth-modal-password",
                      "auth-modal-toggle-password"
                    )
                  }
                ></i>
                {/* Password Strength Indicator (Only for Sign Up) */}
                {!isLogin && (
                  <span
                    id="password-strength"
                    style={{
                      position: "absolute",
                      right: "40px", // Adjust as needed
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "12px",
                      color: "#aaa",
                    }}
                  ></span>
                )}
              </div>
              {/* Re-enter Password Field (Only for Signup) */}
              {!isLogin && (
                <div className="auth-modal-password-field">
                  <input
                    type="password"
                    id="auth-modal-confirm-password"
                    placeholder="Re-enter Password *"
                    name="confirmPassword"
                    required
                    onFocus={() => {
                      const confirmPasswordError = document.getElementById(
                        "confirm-password-error"
                      );
                      confirmPasswordError.textContent = ""; // Clear any existing error on focus
                    }}
                    onBlur={(e) => {
                      const passwordField = document.getElementById(
                        "auth-modal-password"
                      );
                      const confirmPasswordError = document.getElementById(
                        "confirm-password-error"
                      );
                      if (
                        passwordField &&
                        e.target.value &&
                        e.target.value !== passwordField.value
                      ) {
                        confirmPasswordError.textContent =
                          "Passwords do not match";
                        confirmPasswordError.style.color = "red";
                      } else {
                        confirmPasswordError.textContent = "";
                      }
                    }}
                  />
                  {/* Eye Icon */}
                  <i
                    className="fa fa-eye-slash" // Default closed eye
                    id="auth-modal-toggle-confirm-password"
                    onClick={() =>
                      togglePasswordVisibility(
                        "auth-modal-confirm-password",
                        "auth-modal-toggle-confirm-password"
                      )
                    }
                  ></i>
                  {/* Password Mismatch Error */}
                  <span
                    id="confirm-password-error"
                    style={{
                      position: "absolute",
                      right: "40px", // Adjust as needed
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "12px",
                      color: "red",
                    }}
                  ></span>
                </div>
              )}
              {/* Forgot Password Link (Only for Login) */}
              {isLogin && (
                <div className="auth-modal-forgot-password">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowForgotPassword(true);
                    }}
                  >
                    Forgot Password?
                  </a>
                </div>
              )}
              {/* Submit Button */}
              <button type="submit" disabled={isLoading === "login" || isLoading === "signup"}>
                {isLoading === "login" || isLoading === "signup" ? (
                  <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      border: "4px solid #f3f3f3",
                      borderTop: "4px solid green",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                </div>
                ) : (
                  isLogin ? "Sign In" : "Sign Up"
                )}
              </button>
            </form>
            {/* Switch Between Login and Sign Up */}
            <div className="auth-modal-switch">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Toggle Password Visibility Function
function togglePasswordVisibility(fieldId, iconId) {
  const passwordField = document.getElementById(fieldId);
  const icon = document.getElementById(iconId);
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Show password
    icon.classList.remove("fa-eye-slash"); // Change to open eye
    icon.classList.add("fa-eye"); // Add closed eye
  } else {
    passwordField.type = "password"; // Hide password
    icon.classList.remove("fa-eye"); // Remove closed eye
    icon.classList.add("fa-eye-slash"); // Add open eye
  }
}

export default AuthPage;
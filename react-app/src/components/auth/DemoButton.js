// React Dependencies
import React, { Fragment, useState } from "react";
// React Router Dependencies
import { useHistory } from "react-router-dom";
// Login Helper Function
import { login } from "../../services/auth";
// CSS Stylesheet
import "./DemoButton.css";

// Define Component with destructured props
const DemoButton = ({ setAuthenticated, setUser }) => {
  // React Router Dom Hooks
  // Used for navigation
  const history = useHistory();
  // React Hooks
  // Setup state for errors to be handles
  const [errors, setErrors] = useState([]);

  // Login Function with Demo Credentials
  const onLogin = async (e) => {
    // Prevent from automatically submitting "form"
    e.preventDefault();
    // Use helper function passing in known Demo credentials
    const user = await login("RickRoso", "rossboss");
    // If there are no errors on the user, setAuthenticated to true, setUser to this user, and redirect to Austin city page to verify success login
    if (!user.errors) {
      setAuthenticated(true);
      setUser(user);
      history.push("/city/austin");
      // Else set state of errors to user.errors for display purposes
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <Fragment>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <button type="submit" onClick={onLogin}>
        Demo
      </button>
    </Fragment>
  );
};

export default DemoButton;

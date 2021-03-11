// React Dependencies
import React, { Fragment, useState } from "react";
// React Router Dependencies
import { useHistory } from "react-router-dom";
// Login Helper Function
import { login } from "../../services/auth";

// Login Form Component with Destructured Props
const LoginForm = ({
  setAuthenticated,
  closeModal,
  setUser,
}) => {
  // React Router Dom Hooks
  // Used for navigation
  const history = useHistory();
  // React Hooks
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login Function when user submits form
  const onLogin = async (e) => {
    // Prevent Auto Submit
    e.preventDefault();
    // Set user variable to result of login helper function and username/parameter arguments
    const user = await login(username, password);
    // If there are errors, set authenticated to true, close the modal, set the User state to user and redirect the user to Austin City page
    if (!user.errors) {
      setAuthenticated(true);
      closeModal();
      setUser(user);
      history.push("/city/austin");
      // Else set the state of the errors to the user errors for display
    } else {
      setErrors(user.errors);
    }
  };
  // Update the username to what the user is inputting
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  // Update the password to what the user is inputting
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Fragment>
      <h1 className="form__heading">Sign In</h1>
      <form onSubmit={onLogin}>
        {errors.map((error) => (
          <p>{error}</p>
        ))}
        <div className="form__item">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={updateUsername}
          />
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className="form__item">
          <button type="submit">Login</button>
        </div>
      </form>
    </Fragment>
  );
};

export default LoginForm;

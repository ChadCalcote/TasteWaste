// React Dependencies
import React, { Fragment, useState } from "react";
// React Router Dependencies
import { useHistory } from "react-router-dom";
// Login Helper Function
import { login } from "../../services/auth";
import "./DemoButton.css";

const DemoButton = ({ authenticated, setAuthenticated, setUser }) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login("RickRoso", "rossboss");
    if (!user.errors) {
      setAuthenticated(true);
      setUser(user);
      history.push("/city/austin");
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

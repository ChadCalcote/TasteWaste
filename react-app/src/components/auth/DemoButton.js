import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import "./DemoButton.css";


const DemoButton = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login('RickRoso', 'rossboss');
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  if (authenticated) {
    return <Redirect to="/city/austin" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
        <button type="submit">Demo</button>
    </form>
  );
};

export default DemoButton;
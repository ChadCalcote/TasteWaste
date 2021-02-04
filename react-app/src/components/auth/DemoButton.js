import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";


const DemoButton = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login('RickRoso', 'rossboss');
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

//   const updateUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

  if (authenticated) {
    return <Redirect to="/" />;
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
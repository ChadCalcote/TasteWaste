import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ authenticated, setAuthenticated, closeModal, setUser }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (!user.errors) {
      setAuthenticated(true);
      closeModal();
      history.push("/city/austin");
      setUser(user);
    } else {
      setErrors(user.errors);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
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
      <div>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={updateUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;

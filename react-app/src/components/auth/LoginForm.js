import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({
  authenticated,
  setAuthenticated,
  closeModal,
  setUser,
}) => {
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

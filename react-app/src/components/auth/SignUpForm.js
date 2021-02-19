import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { signUp } from "../../services/auth";

const SignUpForm = ({ authenticated, setAuthenticated, closeDrawer }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoBase64, setPhotoBase64] = useState("");
  const [src, setSrc] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(
        username,
        email,
        photoBase64,
        zipCode,
        password
      );
      if (!user.errors) {
        setAuthenticated(true);
        closeDrawer();
        history.push("/city/austin");
      }
    }
  };

  const onFileChange = async (e) => {
    console.log(e.target.value);
    setSrc(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.value);
    setPhotoBase64(JSON.stringify(await toBase64(e.target.files[0])));
  };

  const toBase64 = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result);
      reader.onerror = (error) => rej(error);
    });

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="drawer">
      <h1 className="form__heading">Sign In</h1>
      <form onSubmit={onSignUp}>
        <div className="form__item">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="form__item">
          <label htmlFor="photo">Profile Photo</label>
          <input
            type="file"
            name="photo"
            id="photo"
            onChange={onFileChange}
            value={photo}
          ></input>
        </div>
        {photo ? (
          <img width="350px" height="350px" src={src} alt="upload" />
        ) : null}
        <div className="form__item">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            onChange={updateZipCode}
            value={zipCode}
          ></input>
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="form__item">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            onChange={updateConfirmPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="form__item">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

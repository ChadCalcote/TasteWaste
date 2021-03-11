// React Dependencies
import React, { useState } from "react";
// React Router Dom Dependencies
import { Redirect, useHistory } from "react-router-dom";
// Sign Up Helper Function
import { signUp } from "../../services/auth";

// Sign Up Form Component with Destructured Props
const SignUpForm = ({ authenticated, setAuthenticated, closeDrawer }) => {
  // React Router Dom Hooks
  const history = useHistory();
  // React Hooks
  // Setup State for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoBase64, setPhotoBase64] = useState("");
  const [src, setSrc] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setConfirmPassword] = useState("");

  // What happens when user submits sign up form
  const onSignUp = async (e) => {
    // Prevent form from automatically submitting
    e.preventDefault();
    // If the password equals the repeat password field, use signUp helper function to sign them up
    if (password === repeatPassword) {
      const user = await signUp(
        username,
        email,
        photoBase64,
        zipCode,
        password
      );
      // If there are no errors in the user, set authenticated to true, close the drawer, and redirect them to the Austin City Page
      if (!user.errors) {
        setAuthenticated(true);
        closeDrawer();
        history.push("/city/austin");
      }
    }
  };

  // Manual File Upload function
  // Not efficient needs to be changed to AWS
  // Slows down sign up process
  const onFileChange = async (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.value);
    setPhotoBase64(JSON.stringify(await toBase64(e.target.files[0])));
  };

  // Helper function to change file to base64 format
  const toBase64 = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result);
      reader.onerror = (error) => rej(error);
    });

  // Update state as user makes input to form
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

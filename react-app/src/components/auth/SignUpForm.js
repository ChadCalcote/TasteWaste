import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import axios from 'axios';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setConfirmPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, photo, zipCode, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const onFileChange = (e) => {
    setPhoto(e.target.files[0])
  }

  // const onFileUpload = () => {
  //   const formData = new FormData();

  //   formData.append(
  //     "Photo",
  //     photo,
  //     photo.name
  //   )

  //   console.log(photo)
  // }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhoto = (e) => {
    setPhoto(e.target.value);
  }

  const updateZipCode = (e) => {
    setZipCode(e.target.value);
  }

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
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Profile Photo</label>
        <input
          type="file"
          name="photo"
          onChange={onFileChange}
          value={photo}
        ></input>
        <button>Upload</button>
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          name="zipCode"
          onChange={updateZipCode}
          value={zipCode}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          onChange={updateConfirmPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;

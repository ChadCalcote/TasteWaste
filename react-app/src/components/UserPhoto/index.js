import React from "react";
import { useState } from "react";
import "./index.css";

const UserPhoto = ({ user }) => {
  const [imageLoaded, setImageLoaded] = useState("loading");
  const [imageErrored, setImageErrored] = useState("");

  const handleImageLoaded = () => setImageLoaded("loaded");

  const handleImageErrored = () => setImageErrored("failed to load");

  function displayUserImage(user) {
    return (
      <img
        className="user-image"
        src={user.photo}
        onLoad={handleImageLoaded}
        onError={handleImageErrored}
        alt="user"
      />
    );
  }

  return (
    <div className="user_photo">
      {user.photo ? displayUserImage(user) : null}
    </div>
  );
};

export default UserPhoto;

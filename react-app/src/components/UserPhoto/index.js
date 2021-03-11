// React Dependencies
import React, { useState } from "react";
// CSS Stylesheet
import "./index.css";

// Define UserPhoto Component with destructured prop
const UserPhoto = ({ user }) => {
  // React Hooks
  // Setup state for image loading
  const [imageLoaded, setImageLoaded] = useState("loading");
  const [imageErrored, setImageErrored] = useState("");
  // Component Functions
  // Functions to handle image loading
  const handleImageLoaded = () => setImageLoaded("loaded");

  const handleImageErrored = () => setImageErrored("failed to load");
  // Function that handles displaying the user image
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

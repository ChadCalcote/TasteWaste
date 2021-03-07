import "./home.css";
import DemoButton from "../auth/DemoButton";
import React, { useEffect } from "react";

const Homepage = ({ setUser, changeImg, authenticated, setAuthenticated }) => {


  useEffect(() => {
    changeImg(
      "linear-gradient(0deg, rgba(252,197,228,1) 0%, rgba(255,125,124,1) 40%, rgba(54,41,142,1) 89%, rgba(3,16,118,1) 100%)"
    );
  });

  return (
    <div className="homepage-container">
      <h1 className="homepage-container__header">TasteWaste</h1>
      <p className="homepage-container__description">
        Find out what your favorite restaurant is doing to help save the planet!
      </p>
      <div className="homepage-container__demo">
        <DemoButton
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setUser={setUser}
        />
      </div>
    </div>
  );
};

export default Homepage;

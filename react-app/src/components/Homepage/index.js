import "./home.css";
import DemoButton from "../auth/DemoButton";
import React, { useEffect, useState } from "react";

const Homepage = ({ setUser, changeImg }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    changeImg(
      "linear-gradient(to right top, rgb(28,28,28), rgb(98,63,63), rgb(184,99,99), rgb(252,119,119), rgb(253,154,154), rgb(252,172,172), rgb(252,188,188))"
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

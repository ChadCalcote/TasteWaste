import "./home.css";
import DemoButton from "../auth/DemoButton";
import React, { useState } from "react";

const HomePage = ({ setUser }) => {
  const [authenticated, setAuthenticated] = useState(false);

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

export default HomePage;

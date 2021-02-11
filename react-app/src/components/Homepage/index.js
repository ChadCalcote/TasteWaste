import "./home.css";
import DemoButton from "../auth/DemoButton";
import React, { useState } from "react";

const HomePage = () => {
    const [authenticated, setAuthenticated] = useState(false);
    return (
      <div className="homepage-container">
        <div className="homepage-container__body">
          <div className="homepage-container__header">
            <h1>TasteWaste</h1>
          </div>
          <div className="homepage-container__description">
            <h2>Find out what your favorite restaurant is doing to help save the planet!</h2>
          </div>
          <div className="homepage-container__demo">
            <DemoButton
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </div>
        </div>
      </div>
    );
}

export default HomePage;
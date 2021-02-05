import "./home.css";
import DemoButton from "../auth/DemoButton";
import React from "react";
import NavBar from "../NavBar";

const HomePage = () => {
    return (
      <div className="homepage-container">
        <NavBar />
        <div className="homepage-container__body">
            <div className="homepage-container__header">
          <h1>TasteWaste</h1>
        </div>
        <div className="homepage-container__description">
          <h2>Application Description Goes Here</h2>
        </div>
        <div className="homepage-container__demo">
          <DemoButton />
        </div>
        </div>
      </div>
    );
}

export default HomePage;
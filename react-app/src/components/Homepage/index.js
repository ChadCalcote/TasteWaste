import "./home.css";
import DemoButton from "../auth/DemoButton";
import React, { useState, useEffect } from "react";

const HomePage = ({changeImg, setUser}) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      changeImg("url(https://img.pngio.com/fresh-background-gradients-webgradientscom-purple-and-orange-png-2400_2000.png)");
    });

    return (
      <div className="homepage-container">
        <div className="homepage-container__body">
          <div className="homepage-container__header"></div>
            <h1>TasteWaste</h1>
          <div className="homepage-container__description">
            <h2>Find out what your favorite restaurant is doing to help save the planet!</h2>
          </div>
          <div className="homepage-container__demo">
            <DemoButton
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              setUser={setUser}
            />
          </div>
        </div>
      </div>
    );
}

export default HomePage;
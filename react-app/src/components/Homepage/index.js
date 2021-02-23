import "./home.css";
import DemoButton from "../auth/DemoButton";
import React, { useEffect, useState } from "react";

const Homepage = ({ setUser, changeImg }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    changeImg(
      "url(https://img.pngio.com/fresh-background-gradients-webgradientscom-purple-and-orange-png-2400_2000.png)"
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

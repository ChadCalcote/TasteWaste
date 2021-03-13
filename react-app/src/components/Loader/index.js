import React from "react";
import gif from "./burger.gif"

const Loader = () => {

    return (
        <div className="fp-container">
                <img src={gif} className="fp-loader" alt="loading"/>
        </div>
    );
};

export default Loader;

import React, { useState } from "react";
import Loader from "../Loader";

const UseLoader = () => {
    const [loading, setLoading] = useState(false)
    return [
        loading ? <Loader /> : null,
        () => setLoading(true), // Show Loader
        () => setLoading(false) // Hide Loader
    ];
}

export default UseLoader;
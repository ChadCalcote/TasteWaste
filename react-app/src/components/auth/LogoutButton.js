import React, { useState } from "react";
import { logout } from "../../services/auth";
import { Redirect } from "react-router-dom";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    e.preventDefault();
    await logout();
    setAuthenticated(false);
    return <Redirect to="/home" />;
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;

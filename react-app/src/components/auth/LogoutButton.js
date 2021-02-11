import React from "react";
import { logout } from "../../services/auth";
import { Redirect } from "react-router-dom";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    e.preventDefault();
    await logout();
    setAuthenticated(false);
    return <Redirect to="/home" />;
  };

  return (
    <div style={{ color: "#f37588" }} onClick={onLogout}>
      Logout
    </div>
  );
};

export default LogoutButton;

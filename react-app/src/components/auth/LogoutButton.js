import React from "react";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";

const LogoutButton = ({setAuthenticated}) => {

  const history = useHistory();
  const onLogout = async (e) => {
    e.preventDefault();
    await logout();
    setAuthenticated(false);
    history.push("/")
  };

  return (
    <div style={{ color: "#f37588" }} onClick={onLogout}>
      Logout
    </div>
  );
};

export default LogoutButton;

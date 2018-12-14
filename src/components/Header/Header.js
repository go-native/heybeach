import React from "react";
import "./Header.css";

const Header = ({ onOpenRegisterModal, onOpenLoginModal, onLogout, user }) => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo--icon" />
        <div className="logo--title">HeyBeach!</div>
      </div>
      <div className="actions">
        {user && <span className="actions__email">{user.email}</span>}
        {!user && <span onClick={onOpenRegisterModal}>Register</span>}
        {!user && <span onClick={onOpenLoginModal}>Login</span>}
        {user && <span onClick={onLogout}>Logout</span>}
      </div>
    </div>
  );
};

export default Header;

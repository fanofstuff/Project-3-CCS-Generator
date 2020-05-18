import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav>
      <div className="navbar">
        <a href="/" className="navbar-brand navbar-link-style" id="logo-brand">
          Landing Page
        </a>
        {props.isLoggedIn ? (
          <>
            <a
              className="navbar-brand navbar-link-style"
              href={`/home/${props.userObject.id}`}
            >
              User Profile
            </a>
            <a
              onClick={props.logOutUser}
              className="navbar-brand navbar-link-style"
              href="/"
            >
              Sign Out
            </a>
          </>
        ) : (
          <>
            <a className="navbar-brand navbar-link-style" href="/login">
              Login
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const signOutHandler = () => {
    signOut(auth)
    .then(() => {
      setIsSignOut(true);
      console.log("Sign out Successfully!");
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            IntelliChat
            {/* <FontAwesomeIcon icon={Icons.fax} size="6px" /> */}
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/chatbox"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                ChatBox
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={signOutHandler}
              >
                {isSignOut === true ? "SignIn or LogIn" : "Sign Out"}
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? Icons.faTimes : Icons.faBars} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

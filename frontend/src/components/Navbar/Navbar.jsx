import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

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
              <a
                href="#"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </a>
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

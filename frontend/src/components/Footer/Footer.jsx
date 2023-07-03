import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Copyright © 2023 IntelliChat. Designed By <a href="https://www.linkedin.com/in/its-kumar-yash/">Yash Kumar</a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/its-kumar-yash">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/its-kumar-yash/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
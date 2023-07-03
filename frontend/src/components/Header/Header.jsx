import React from "react";
import styles from "./Header.module.css";
import chatbotBanner from "../../assets/chatbotbanner.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          "Unlock Productivity with an AI ChatBot by your Side"
        </p>
        <p className={styles.subHeading}>
          IntelliChat is a OpenAI powered tool that brings AI chatbots to the
          next level of sophistication and intelligence. IntelliChat can engage
          in multi-turn conversations, remembering previous interactions and
          providing relevant follow-up responses.
        </p>
        <Link to="/chatbox">
          <button className={styles.btn}>Get Started</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={chatbotBanner} alt="AI" />
      </div>
    </div>
  );
};

export default Header;

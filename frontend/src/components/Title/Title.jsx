import React from "react";
import styles from "./Title.module.css";
import chatbot from "../../assets/chatbot.png";

const Title = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={chatbot} alt="AI" />
        </div>
        <p>AI Assistant</p>
      </div>
    </div>
  );
};

export default Title;

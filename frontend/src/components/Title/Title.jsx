import React from "react";
import styles from "./Title.module.css";
import chatbot from "../../assets/robot.png";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={chatbot} alt="AI" />
          </div>
          <p>AI Assistant</p>
        </div>
      </div>
    </div>
  );
};

export default Title;

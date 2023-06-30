import React from "react";
import chatbot from "../../assets/chatbot.png";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.typing}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  );
};

export default Body;

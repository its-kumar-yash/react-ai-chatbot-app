import React from "react";
import styles from "./InputBar.module.css";
import { Send } from "react-feather";

const InputBar = () => {
  return (
    <div className={styles.footer}>
      <input placeholder="Type here..." />
      <div className={styles.btn}>
        <div className={styles.icon}>
          <Send />
        </div>
      </div>
    </div>
  );
};

export default InputBar;

import React from "react";
import styles from "./ChatBox.module.css";
import Title from "../../components/Title/Title";
import InputBar from "../../components/InputBar/InputBar";
import Body from "../../components/Body/Body";

const ChatBox = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Welcome, {props.name}</h1>
        <Title />
        <Body />
        <InputBar />
      </div>
    </div>
  );
};

export default ChatBox;

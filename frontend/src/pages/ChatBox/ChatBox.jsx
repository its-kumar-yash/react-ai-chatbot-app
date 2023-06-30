import React from "react";
import styles from "./ChatBox.module.css";
import Title from "../../components/Title/Title";
import InputBar from "../../components/InputBar/InputBar";
import Body from "../../components/Body/Body";

const ChatBox = () => {
    return <div className={styles.container}>
        <Title />
        <Body />
        <InputBar />
    </div>
}

export default ChatBox;
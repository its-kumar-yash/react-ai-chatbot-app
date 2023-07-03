import React from "react";
import styles from "./Main.module.css";
import ChatBotCardImg from "../../assets/Chat-bot-bro.svg";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Features</div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ChatBotCardImg} alt="ChatBotCardImg" />
          </div>
          <div className={styles.text}>
          <h1>Card Title</h1>
            <p>Ad ea eu exercitation commodo dolore aliqua. Pariatur mollit tempor
            quis ex ullamco laboris deserunt velit velit sunt. Nostrud ex ex do
            veniam labore elit est. Commodo anim deserunt commodo eu amet quis
            sunt id in ipsum eiusmod do consectetur. Nulla ex cupidatat aliqua
            est pariatur ex ullamco consequat officia sunt irure sint velit. Do
            culpa elit dolor sunt labore officia tempor. Pariatur dolor labore
            exercitation est consequat ut aliquip tempor ipsum eiusmod duis.</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ChatBotCardImg} alt="ChatBotCardImg" />
          </div>
          <div className={styles.text}>
          <h1>Card Title</h1>
            <p>Ad ea eu exercitation commodo dolore aliqua. Pariatur mollit tempor
            quis ex ullamco laboris deserunt velit velit sunt. Nostrud ex ex do
            veniam labore elit est. Commodo anim deserunt commodo eu amet quis
            sunt id in ipsum eiusmod do consectetur. Nulla ex cupidatat aliqua
            est pariatur ex ullamco consequat officia sunt irure sint velit. Do
            culpa elit dolor sunt labore officia tempor. Pariatur dolor labore
            exercitation est consequat ut aliquip tempor ipsum eiusmod duis.</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ChatBotCardImg} alt="ChatBotCardImg" />
          </div>
          <div className={styles.text}>
            <h1>Card Title</h1>
            <p>Ad ea eu exercitation commodo dolore aliqua. Pariatur mollit tempor
            quis ex ullamco laboris deserunt velit velit sunt. Nostrud ex ex do
            veniam labore elit est. Commodo anim deserunt commodo eu amet quis
            sunt id in ipsum eiusmod do consectetur. Nulla ex cupidatat aliqua
            est pariatur ex ullamco consequat officia sunt irure sint velit. Do
            culpa elit dolor sunt labore officia tempor. Pariatur dolor labore
            exercitation est consequat ut aliquip tempor ipsum eiusmod duis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

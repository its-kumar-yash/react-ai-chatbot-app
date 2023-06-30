import React from "react";
import styles from "./App.module.css";
import ChatBox from "./pages/ChatBox/ChatBox";

function App() {
  return (
    <div className={styles.App}>
      <ChatBox />
    </div>
  );
}

export default App;

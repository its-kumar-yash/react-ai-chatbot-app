import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBox from "./pages/ChatBox/ChatBox";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import { auth } from "./firebase";
import Home from "./pages/Home/Home";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/chatbox" element={<ChatBox name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

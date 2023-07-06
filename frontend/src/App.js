import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBox from "./pages/ChatBox/ChatBox";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import { auth } from "./firebase";
import Home from "./pages/Home/Home";
import { ThreeCircles } from "react-loader-spinner";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      {loading ? (
        <div className={styles.loadcontainer}>
          <ThreeCircles
            height="50"
            width="50"
            color="#046cf1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/chatbox" element={<ChatBox name={userName} />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

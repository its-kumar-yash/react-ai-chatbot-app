import React, { useEffect, useState } from "react";
import styles from "./ChatBox.module.css";
import Title from "../../components/Title/Title";
import InputBar from "../../components/InputBar/InputBar";
import Body from "../../components/Body/Body";
import { ThreeCircles } from "react-loader-spinner";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const ChatBox = (props) => {
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

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        alert("Sign out Successfully!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      {loading ? (
        <div className={styles.loadcontainer}>
          <ThreeCircles
            height="50"
            width="50"
            color="#046cf1"
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={`${styles.header} ${styles.item}`}>
              <h2>Hey, {userName === "" ? "User" : `${props.name}`} </h2>
              <Link
                to="/login"
                activeClassName={styles.active}
                className={styles.link}
                onClick={signOutHandler}
              >
                {userName === "" ? "Sign In" : "Sign Out"}
              </Link>
            </div>
            <Title />
            <Body />
            <InputBar />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import InputControl from "../../components/InputControl/InputControl";
import styles from "./LogIn.module.css";
import { ThreeCircles } from "react-loader-spinner";

const LogIn = () => {
  const navigate = useNavigate();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmission = (e) => {
    if (!values.email || !values.pass) {
      setErrorMsg("Please Fill all fields");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    } else if (!regex.test(values.email)) {
      setErrorMsg("Enter a valid email");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    } else if (values.pass.length < 6) {
      setErrorMsg("Password should have Minimum six characters");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        let emptyvals = { email: "", pass: "" };
        setValues(emptyvals);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
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
        <div>
          <div className={styles.container}>
            <div className={styles.innerBox}>
              <h1 className={styles.heading}>Login</h1>

              <InputControl
                label="Email"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                placeholder="Enter email address"
              />
              <InputControl
                label="Password"
                value={values.pass}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                placeholder="Enter Password"
              />

              <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button
                  disabled={submitButtonDisabled}
                  onClick={handleSubmission}
                >
                  Login
                </button>
                <p>
                  Don't have an account?{" "}
                  <span>
                    <Link to="/">Sign up</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;

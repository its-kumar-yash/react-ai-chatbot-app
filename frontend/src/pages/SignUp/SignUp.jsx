import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { auth } from "../../firebase";
import InputControl from "../../components/InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ThreeCircles } from "react-loader-spinner";

const SignUp = () => {
  const navigate = useNavigate();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [values, setValues] = useState({
    name: "",
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

  const handleSubmission = () => {
    
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please Fill all fields");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }
    else if (/^[^a-zA-Z]*$/.test(values.name)){
      setErrorMsg("Enter a valid name");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }
    else if(!regex.test(values.email)){
      setErrorMsg("Enter a valid email");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }
    else if(values.pass.length < 6){
      setErrorMsg("Password should have Minimum six characters");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        let emptyvals = { name: "", email: "", pass: "" };
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
        <div className={styles.container}>
          <div className={styles.innerBox}>
            <h1 className={styles.heading}>Signup</h1>
            <InputControl
              label="Name"
              placeholder="Enter your name"
              value={values.name}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <InputControl
              label="Email"
              placeholder="Enter email address"
              value={values.email}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <InputControl
              label="Password"
              placeholder="Enter password"
              value={values.pass}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />

            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                Signup
              </button>
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;

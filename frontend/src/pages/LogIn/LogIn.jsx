import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import InputControl from "../../components/InputControl/InputControl";
import styles from "./LogIn.module.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = (e) => {
    e.preventDefault();

    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/chatbox");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        let emptyvals = { email: "", pass: "" };
        setValues(emptyvals);
      });
  };

  return (
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
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Login
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

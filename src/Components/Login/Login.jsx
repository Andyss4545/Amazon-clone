import React, { useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseDetails";

const Login = () => {
  const navigate = useNavigate();
  // set the initial state to empty email string
  const [emailInput, setEmailInput] = useState({
    email: "",
  });

  const { email } = emailInput; // destructure the email

  // set the initial state to empty password string
  const [password, setPassword] = useState({
    pass: "",
  });

  const { pass } = password; // destructure the password state

  //  set up onchange event and tell the browser to target the email input value
  let updateEmail = (event) => {
    setEmailInput(() => ({
      ...email,
      email: event.target.value,
    }));
  };

  //  set up onchange event and tell the browser to target the passowrd input value
  let updatePass = (event) => {
    setPassword(() => ({
      ...pass,
      pass: event.target.value,
    }));
  };

  const signIn = (event) => {
    event.preventDefault();

    // some fancy firebase login shiiii
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((auth) => {
        // it successfully login the user with email and password
        console.log(auth);
        if (auth) {
          navigate("/", { replace: true });
        } else {
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (event) => {
    event.preventDefault();
    //  use the function of createUserWithEmailAndPassword
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          // redirect to homepaage if create your accound is successful
          navigate("/", { replace: true });
        } else {
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(pass)}</pre> */}
      <div className="logo">
        <Link to={"/"}>
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

        <div className="login_container">
          <h1>Sign-in</h1>
          <form action="">
            <h5>E-mail</h5>
            <input value={email} onChange={updateEmail} type="text" />

            <h5>Password</h5>
            <input value={pass} onChange={updatePass} type="password" />

            <button type="submit" onClick={signIn} className="login_signInBtn">
              Sign In
            </button>
          </form>

          <p>
            By signing-in you agree to the Amazon Fake Clone Conditions of the
            Use & Sale. Please see our Privacy Notice, our Cookies Notice and
            our Interest-Based Ads Notice
          </p>

          <button onClick={register} className="login_registerBtn">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

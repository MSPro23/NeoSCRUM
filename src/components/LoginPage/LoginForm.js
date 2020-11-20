/**
 * @author Calvin Galbaw
 * @requires useEffect,useState from React Hooks and useInput, useLoader which are custom hooks
 * @description This is the child component to create the form needed for Login
 * @param None
 * @returns {JSX}
 */

import React from "react";
import { useState } from "react";
import useInput from "../../hooks/useInput.js";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "./LoginForm.css";
import Button from "@material-ui/core/Button";
import useLoader from "../../hooks/useLoader.js";
import { Link, Redirect } from "react-router-dom";
function LoginForm() {
  const [email, emailBind] = useInput("");
  const [password, passwordBind] = useInput("");
  const [loader, showLoader, hideLoader] = useLoader();
  const [validation, setValidation] = useState(false);
  const [errorClass, setErrorClass] = useState({
    emailError: " ",
    email: false,
    passwordError: " ",
    password: false,
  });

  const passwordValidation = () => {
    const value = password;
    if (value === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          password: true,
          passwordError: "This field is compulsory",
        };
      });
    } else {
      setErrorClass((prev) => {
        return {
          ...prev,
          password: false,
          passwordError: " ",
        };
      });
      return true;
    }
    return false;
  };

  const emailValidation = () => {
    const pattern = /^\w{1,}(\.|)\w{1,}@\w{1,}\.(com|co.in|in|net)$/;
    const value = email;
    if (value === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          email: true,
          emailError: "This field is compulsory",
        };
      });
    } else if (!pattern.test(value)) {
      setErrorClass((prev) => {
        return {
          ...prev,
          email: true,
          emailError: "Enter a valid email",
        };
      });
    } else {
      setErrorClass((prev) => {
        return {
          ...prev,
          email: false,
          emailError: " ",
        };
      });
      return true;
    }
    return false;
  };

  const user = () => {
    return {
      user_email: email,
      user_pass: password,
    };
  };
  const forgotHandler = () => {};
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailValidation();
    const password = passwordValidation();
    if (email && password) {
      showLoader();
      axios
        .post("http://180.149.241.208:3047/login", user())
        .then((res) => {
          hideLoader();
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("ID", res.data.user_id);
          localStorage.setItem("name", res.data.user_name);
          localStorage.setItem("email", res.data.user_email);
          setValidation(true);
        })
        .catch((e) => {
          hideLoader();
          alert(e.response.message);
        });
    } else {
      console.log(e);
    }
  };

  return !validation ? (
    <div>
      <form onSubmit={submitHandler} className="registerForm">
        <h2 className="heading">Login</h2>
        <TextField
          error={errorClass.email}
          label="Email *"
          {...emailBind}
          onBlur={emailValidation}
          className="registerInput"
          helperText={errorClass.emailError}
        ></TextField>
        <TextField
          label="Password *"
          error={errorClass.password}
          type="password"
          {...passwordBind}
          onBlur={passwordValidation}
          className="registerInput"
          helperText={errorClass.passwordError}
        ></TextField>
        <Button
          style={{ display: "inline" }}
          variant="contained"
          color="primary"
          className="submitButton"
          type="submit"
        >
          Login
        </Button>
        <span onClick={forgotHandler} className="forgotPassword">
          <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
            Forgot Password?
          </Link>
        </span>
      </form>
      {loader}
    </div>
  ) : (
    <Redirect to="/dashboard"></Redirect>
  );
}

export default LoginForm;

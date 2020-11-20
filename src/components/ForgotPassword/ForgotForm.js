/**
 * @author Calvin Galbaw
 * @requires useState from React Hooks and useInput which is a custom hook
 * @description This is the child component which contains the form for forgot password page
 * @param None
 * @returns {JSX}
 */

import React from "react";
import { useState } from "react";
import useInput from "../../hooks/useInput.js";
import TextField from "@material-ui/core/TextField";
import "../LoginPage/LoginForm.css";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

function ForgotForm() {
  const [confirm, confirmBind] = useInput("");
  const [password, passwordBind] = useInput("");
  const [email, emailBind] = useInput("");
  const [validation, setValidation] = useState(false);
  const [errorClass, setErrorClass] = useState({
    confirmError: " ",
    confirm: false,
    passwordError: " ",
    password: false,
    confirmDisabled: true,
    email: false,
    emailError: " ",
  });

  const passwordValidation = () => {
    const value = password;
    const pvalue = confirm;
    if (value === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          password: true,
          passwordError: "This field is compulsory",
          confirmDisabled: true,
        };
      });
    } else if (value !== pvalue) {
      setErrorClass((prev) => {
        return {
          ...prev,
          password: false,
          passwordError: " ",
          confirm: true,
          confirmDisabled: false,
          confirmError: "Passwords don't match",
        };
      });
    } else {
      setErrorClass((prev) => {
        return {
          ...prev,
          password: false,
          confirmDisabled: false,
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
  const confirmValidation = () => {
    const value = confirm;
    const pvalue = password;
    if (value === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          confirm: true,
          confirmError: "This field is compulsory",
        };
      });
    } else if (value !== pvalue) {
      setErrorClass((prev) => {
        return {
          ...prev,
          confirm: true,
          confirmError: "Passwords don't match",
        };
      });
    } else {
      setErrorClass((prev) => {
        return {
          ...prev,
          confirm: false,
          confirmError: " ",
        };
      });
      return true;
    }
    return false;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const confirmVal = confirmValidation();
    const passwordVal = passwordValidation();
    const emailVal = emailValidation();
    if (confirmVal && passwordVal && emailVal) {
      setValidation(true);
      alert("Password changed");
    } else {
    }
  };

  return !validation ? (
    <div>
      <form onSubmit={submitHandler} className="registerForm">
        <h2 className="heading">Forgot Password</h2>
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
        <TextField
          disabled={errorClass.confirmDisabled}
          error={errorClass.confirm}
          type="password"
          label="Confirm Password *"
          {...confirmBind}
          onBlur={confirmValidation}
          className="registerInput"
          helperText={errorClass.confirmError}
        ></TextField>
        <Button
          style={{ display: "inline" }}
          variant="contained"
          color="primary"
          className="submitButton"
          type="submit"
        >
          Confirm Password
        </Button>
      </form>
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
}

export default ForgotForm;

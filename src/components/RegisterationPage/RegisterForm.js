/**
 * @author Calvin Galbaw
 * @requires useEffect,useState from React Hooks and useInput, useLoader which are custom hooks and
 * useStyles for designing material UI. Axios is used to send the form details
 * @description This is the child component to create the form needed for Registeration of new user
 * @param None
 * @returns {JSX}
 */

import React from "react";
import { useState } from "react";
import useInput from "../../hooks/useInput.js";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "./RegisterPage.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useLoader from "../../hooks/useLoader.js";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});
function RegisterForm() {
  const [employeeName, employeeNameBind] = useInput("");
  const [loader, showLoader, hideLoader] = useLoader();
  const [email, emailBind] = useInput("");
  const [validation, setValidation] = useState(false);
  const [profilePic, profilePicBind] = useInput("");
  const [errorClass, setErrorClass] = useState({
    employeeName: false,
    employeeNameError: " ",
    email: false,
    emailError: " ",
    profilePic: false,
    profilePicError: " ",
  });
  const nameValidation = () => {
    const pattern = /(\d|\s|\W)/;
    const value = employeeName.trim();
    if (value === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          employeeName: true,
          employeeNameError: "This field is compulsory",
        };
      });
    } else if (pattern.test(value)) {
      setErrorClass((prev) => {
        return {
          ...prev,
          employeeName: true,
          employeeNameError: "Must contain only alphabet",
        };
      });
    } else {
      setErrorClass((prev) => {
        return {
          ...prev,
          employeeName: false,
          employeeNameError: " ",
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

  const profilePicValidation = () => {
    const pattern = /(.jpg|.jpeg|.png)$/;
    const value = profilePic;
    if (value === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          profilePic: true,
          profilePicError: "Please upload a profile picture",
        };
      });
    } else if (!pattern.test(value)) {
      setErrorClass((prev) => {
        return {
          ...prev,
          profilePic: true,
          profilePicError: "Must be .jpg, .jpeg and .png format",
        };
      });
    } else {
      setErrorClass((prev) => {
        return {
          ...prev,
          profilePic: false,
          profilePicError: " ",
        };
      });
      return true;
    }
    return false;
  };
  const user = () => {
    return {
      user_name: employeeName,
      user_email: email,
      profile_image: profilePic,
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameValidation();
    const email = emailValidation();
    const profile = profilePicValidation();
    if (name && email && profile) {
      showLoader();
      axios
        .post("http://180.149.241.208:3047/registration", user())
        .then((res) => {
          hideLoader();
          res.data.success && alert(res.data.message);
          setValidation(true);
        })
        .catch((e) => {
          hideLoader();
          setErrorClass((prev) => {
            return {
              ...prev,
              email: true,
              emailError: e.response.data.message,
            };
          });
        });
    }
  };
  const classes = useStyles();

  return !validation ? (
    <div>
      <form onSubmit={submitHandler} className="registerForm">
        <h3 className="heading">Enter New Developer</h3>
        <TextField
          error={errorClass.employeeName}
          label="Employee Name *"
          {...employeeNameBind}
          onBlur={nameValidation}
          className="registerInput"
          helperText={errorClass.employeeNameError}
        ></TextField>
        <TextField
          error={errorClass.email}
          label="Email *"
          {...emailBind}
          onBlur={emailValidation}
          className="registerInput"
          helperText={errorClass.emailError}
        ></TextField>
        <TextField
          error={errorClass.profilePic}
          type="file"
          className="uploadPic"
          accept=".jpg,.jpeg,.png"
          {...profilePicBind}
          onBlur={profilePicValidation}
          InputProps={{ classes }}
          helperText={errorClass.profilePicError}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          className="submitButton"
          type="submit"
        >
          Submit
        </Button>
      </form>
      {loader}
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
}

export default RegisterForm;

/**
 * @author Calvin Galbaw
 * @requires useEffect,useState from React Hooks
 * @description This is the parent component for the Forgot Password Page which contains one child Component for form
 * @param None
 * @returns {JSX}
 */

import React, { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core/";
import "../LoginPage/LoginForm.css";
import ForgotForm from "./ForgotForm.js";
import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

function ForgotPasswordPage() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const accountHandler = () => {};
  console.log(token);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1 className="logo">
        Neo<span>scrum</span>
      </h1>
      <Paper className="formContainer">
        {token !== "" ? (
          <Redirect to="/dashboard"></Redirect>
        ) : (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ForgotForm></ForgotForm>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button color="primary" onClick={accountHandler}>
                Back to Login
              </Button>
            </Link>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
}

export default ForgotPasswordPage;

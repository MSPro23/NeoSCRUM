/**
 * @author Calvin Galbaw
 * @requires useEffect,useState from React Hooks
 * @description This is the parent component for the Login form which holds the form and other buttons
 * @param None
 * @returns {JSX}
 */

import React, { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core/";
import "./LoginForm.css";
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

function LoginPg() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);
  // const logOutHandler = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("ID");
  //   localStorage.removeItem("name");
  //   localStorage.removeItem("email");
  //   setToken(localStorage.getItem("token") || "");
  // };

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
            <LoginForm></LoginForm>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button color="primary" onClick={accountHandler}>
                New User?
              </Button>
            </Link>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
}

export default LoginPg;

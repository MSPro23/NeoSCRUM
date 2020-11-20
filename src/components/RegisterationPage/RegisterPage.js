/**
 * @author Calvin Galbaw
 * @requires useEffect,useState from React Hooks
 * @description This is the parent component for the Register form which holds the form and other buttons
 * @param None
 * @returns {JSX}
 */

import React from "react";
import RegisterForm from "./RegisterForm";
import { Button, Grid, Paper } from "@material-ui/core/";
import { useEffect, useState } from "react";
import "./RegisterPage.css";
import { Link, Redirect } from "react-router-dom";

function RegisterPage() {
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
            <RegisterForm></RegisterForm>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button color="primary">Already have a account?</Button>
            </Link>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
}

export default RegisterPage;

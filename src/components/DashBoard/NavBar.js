/**
 * @author Calvin Galbaw
 * @requires useEffect, useState from React Hooks
 * @description This is the child component used to create the Navigation Bar
 * @param None
 * @returns {JSX}
 */

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    color: "#44b700",
    backgroundColor: "#44b700",
    boxShadow: `0 0 0 2px #44b700`,
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "grey",
    position: "sticky",
    top: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  addButton: {
    marginRight: "20px",
  },
}));

function NavBar() {
  const [token, setToken] = useState("");
  const userName = localStorage.getItem("name");
  const profile = "Calvin";
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);
  const classes = useStyles();
  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("ID");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setToken(localStorage.getItem("token") || "");
  };
  const addFeedBackHandler = () => {};
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <StyledBadge
          overlap="circle"
          className={classes.menuButton}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
          badgeContent=" "
        >
          <Avatar alt={profile} src="/static/images/avatar/1.jpg" />
        </StyledBadge>
        <Typography variant="h6" className={classes.title}>
          {userName || "NeoSCRUM"}
        </Typography>
        <Link to="/feedback" style={{ textDecoration: "none" }}>
          <Button
            onClick={addFeedBackHandler}
            color="primary"
            variant="contained"
            className={classes.addButton}
          >
            Add FeedBack
          </Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="secondary" variant="contained" onClick={logOutHandler}>
            {token === "" ? "Login" : "Log Out"}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

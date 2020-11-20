/**
 * @author Calvin Galbaw
 * @requires useEffect from React Hooks
 * @description This is the parent component for the Dashboard Page which contains two children Components
 * @param None
 * @returns {JSX}
 */

import React from "react";
import FeedBackPage from "./FeedBackPage";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

function DashBoardPage() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <hr></hr>
      {token === "" ? (
        <h1
          style={{
            textAlign: "center",
            color: "red",
            fontFamily: "sans-serif",
          }}
        >
          You Have not Logged in
        </h1>
      ) : (
        <FeedBackPage />
      )}
    </div>
  );
}

export default DashBoardPage;

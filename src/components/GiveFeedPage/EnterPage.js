/**
 * @author Calvin Galbaw
 * @requires useEffect from React Hooks
 * @description This is the parent component for the Feedback Page which contains two children Components
 * @param None
 * @returns {JSX}
 */

import React from "react";
import NavBar from "./NavBar";
import EnterFeedBack from "./EnterFeedBack";
import { useState, useEffect } from "react";

function EnterPage() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <hr />
      <div>
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
          <EnterFeedBack></EnterFeedBack>
        )}
      </div>
    </div>
  );
}

export default EnterPage;

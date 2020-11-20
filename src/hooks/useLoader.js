/**
 * @author Calvin Galbaw
 * @requires useState from React Hooks and Loader animation
 * @description This is a custom hook for reducing the code verbose for common loader effect
 * @param None
 * @returns {[loader, setLoading]} which is the loader and couple of functions which set the state of
 * loader to true or false
 */

import React from "react";
import { useState } from "react";
import Loader from "react-loader-spinner";
import "../App.css";

function useLoader() {
  const [loading, setLoading] = useState(false);
  return [
    loading && (
      <div className="loaderContainer">
        <Loader
          type="TailSpin"
          color="#2BAD60"
          height="100"
          width="100"
          className="loader"
        />
      </div>
    ),
    () => setLoading(true),
    () => setLoading(false),
  ];
}

export default useLoader;

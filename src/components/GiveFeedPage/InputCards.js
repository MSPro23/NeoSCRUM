/**
 * @author Calvin Galbaw
 * @requires Moment from React Moment
 * @description This is the child component which renders each receiver details and form where
 * user can enter the feedback
 * @param { receiver_id, receiver_name, image_path, data, setData } sent from EnterPage
 * @returns {JSX}
 */

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useState } from "react";
import "./EnterFeedBack.css";

function InputCards(props) {
  const [feedback, setfeedback] = useState("");
  const [errorClass, setErrorClass] = useState({
    feedbackStyle: false,
    feedbackError: "",
  });

  const ChangeHandler = (e) => {
    e.target.value.length > 100
      ? setfeedback(feedback)
      : setfeedback(e.target.value);
  };

  const feedbackBlur = () => {
    if (feedback === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          feedbackStyle: true,
          feedbackError: "This field is compulsory",
        };
      });
    } else {
      setErrorClass((prev) => {
        return {
          ...prev,
          feedbackStyle: false,
          feedbackError: "",
        };
      });
    }
  };

  const submitHandler = () => {
    if (feedback === "") {
      setErrorClass((prev) => {
        return {
          ...prev,
          feedbackStyle: true,
          feedbackError: "This field is compulsory",
        };
      });
    } else {
      setData(() => {
        return data.filter((item) => item.receiver_id !== receiver_id);
      });
    }
  };

  const { receiver_id, receiver_name, image_path, data, setData } = props;
  // console.log(setData);
  return (
    <Paper elevation={4} className="InputFeedBackContainer">
      <div className="InputTitle">
        <img className="AvatarPic" alt="profile pic" src={image_path}></img>
        <h3 className="Name">{receiver_name}</h3>
      </div>
      <div>
        <TextField
          value={feedback}
          error={errorClass.feedbackStyle}
          helperText={errorClass.feedbackError}
          onBlur={feedbackBlur}
          placeholder="Write your feedback here..."
          onChange={ChangeHandler}
          variant="outlined"
          multiline
          rows={4}
          className="InputField"
        ></TextField>
        <span className="helper">Max 100 characters</span>
        <div className="count">
          <span>{feedback.length}/100</span>
        </div>
      </div>
      <Button
        onClick={submitHandler}
        className="SubmitFeedBackButton"
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
    </Paper>
  );
}

export default InputCards;

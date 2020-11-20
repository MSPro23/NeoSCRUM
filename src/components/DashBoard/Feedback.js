/**
 * @author Calvin Galbaw
 * @requires Moment from React Moment
 * @description This is the child component which renders each feedback
 * @param {receiver_id,feedback_data, posting_date} sent from FeedBackPage
 * @returns {JSX}
 */

import React from "react";
import "./FeedBack.css";
import Moment from "react-moment";
function Feedback({ receiver_id, feedback_data, posting_date }) {
  console.log(receiver_id);
  return (
    <div className="FeedBackContainer">
      <div className="Title">
        <h4>Feedbacks</h4>
        <p className="PostSince">
          <Moment fromNow>{posting_date}</Moment>
        </p>
      </div>
      <div className="FeedBack">
        <p>{feedback_data}</p>
      </div>
      <div className="Details">
        posted on: <Moment format="Do MMM YYYY">{posting_date}</Moment>
      </div>
    </div>
  );
}

export default Feedback;

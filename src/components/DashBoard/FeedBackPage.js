/**
 * @author Calvin Galbaw
 * @requires useState from React Hooks
 * @description This is the parent component to the Feedback which contains data requested from the server
 * @param None
 * @returns {JSX}
 */

import Grid from "@material-ui/core/Grid";
import React from "react";
import { useState } from "react";
import Feedback from "./Feedback.js";

function FeedBackPage() {
  const [data, setData] = useState([
    {
      receiver_id: 87,
      feedback_data: "Great",
      posting_date: "2019-03-19T18:30:00.000Z",
    },
    {
      receiver_id: 87,
      feedback_data: "Good Player",
      posting_date: "2019-09-29T18:30:00.000Z",
    },
    {
      receiver_id: 87,
      feedback_data: "Good Player2",
      posting_date: "2019-06-29T18:30:00.000Z",
    },
    {
      receiver_id: 87,
      feedback_data: "Good Player3",
      posting_date: "2019-05-29T18:30:00.000Z",
    },
    {
      receiver_id: 87,
      feedback_data: "Good Player4",
      posting_date: "2019-04-29T18:30:00.000Z",
    },
    {
      receiver_id: 87,
      feedback_data: "Good Player5",
      posting_date: "2020-03-29T18:30:00.000Z",
    },
  ]);
  return data.length === 0 ? (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Not FeedBacks Given Yet
      </h1>
    </div>
  ) : (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      {data.map((name) => (
        <Grid item lg={4} sm={6} xs={12}>
          <Feedback {...name}></Feedback>
        </Grid>
      ))}
    </Grid>
  );
}

export default FeedBackPage;

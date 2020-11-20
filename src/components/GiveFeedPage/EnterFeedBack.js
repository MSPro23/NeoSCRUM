/**
 * @author Calvin Galbaw
 * @requires useEffect,useState from React Hooks and axios for API call
 * @description This is the parent component to the InputCards which contains the data sent from the server which loads
 * the details of receiver whose feedbacks are needed
 * @param None
 * @returns {JSX}
 */

import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import InputCards from "./InputCards.js";
import pic1 from "./blog_image_1.jpg";
import pic2 from "./blog_image_2.jpg";
import pic3 from "./blog_image_3.jpg";

function EnterFeedBack() {
  const [data, setData] = useState([
    {
      sender_id: 88,
      receiver_id: 97,
      receiver_name: "Person 3",
      image_path: pic1,
      flags: false,
    },
    {
      sender_id: 88,
      receiver_id: 87,
      receiver_name: "Person 2",
      image_path: pic2,
      flags: false,
    },
    {
      sender_id: 88,
      receiver_id: 57,
      receiver_name: "Person 1",
      image_path: pic3,
      flags: false,
    },
  ]);
  return data.length === 0 ? (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        All the feedbacks needed are completed for now
      </h1>
    </div>
  ) : (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      {data.map((name) => (
        <Grid item lg={3} sm={7} xs={12}>
          <InputCards
            {...name}
            data={data}
            setData={setData}
            key={name.receiver_id}
          ></InputCards>
        </Grid>
      ))}
    </Grid>
  );
}

export default EnterFeedBack;

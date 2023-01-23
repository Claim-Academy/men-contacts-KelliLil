import mongoose from "mongoose";
import config from "../config.js";

mongoose
  .connect(config.getDbConnectionString("contacts"))
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

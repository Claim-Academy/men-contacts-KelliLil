import mongoose from "mongoose";
import config from "../config.js";
import Contact from "./Contacts.js";

mongoose
  .connect(config.getDbConnectionString("contacts"))
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

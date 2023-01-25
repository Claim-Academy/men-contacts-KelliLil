import mongoose from "mongoose";
import config from "../config.js";
import Contact from "./Contacts.js";

// Enforce strict query mode to prevent queries for fields that don't exist in the schema
mongoose.set("strictQuery", true);

mongoose
  .connect(config.dbConn)
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err.message);
  });

export default {
  // Get all contacts
  index() {
    return Contact.find();
  },

  // get single contact
  showById(id) {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return Contact.findById(id);
    }
    // Wrap error in rejected promise so it can be caught
    return Promise.reject(new Error("Invalid ID"));
  },
};

create(contact) {
  return Contact.create(contact);
},
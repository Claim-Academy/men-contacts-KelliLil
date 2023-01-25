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

const contactController = {
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

showByUsername(username) {
  return Contact.findOne({ username });
},

create(contact) {
  return Contact.create(contact);
},

updateById(id2Update, updatedContact) {
  if (mongoose.Types.ObjectId.isValid(id2Update)) {
    return Contact.findByIdAndUpdate(
      id2Update,

      // The updated contact only needs to have the fields that are being updated
      updatedContact,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );
  }

  // Wrap the error in a rejected promise so that it can be CAUGHT.
  return Promise.reject(new Error("Invalid ID"));
};

updateByUsername(username, updatedContact) {
  return Contact.findOneAndUpdate({ username }, updatedContact, {
    returnDocument: "after",
    runValidators: true,
  });
},


deleteById(id2Delete) {
  if (mongoose.Types.ObjectId.isValid(id2Delete)) {
    return Contact.findByIdAndDelete(id2Delete);
  }

  // Wrap the error in a rejected promise so that it can be CAUGHT.
  return Promise.reject(new Error("Invalid ID"));
},

deleteByUsername(username) {
  return Contact.findOneAndDelete(username);
},

export default contactController;
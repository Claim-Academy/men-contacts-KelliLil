import { model, Schema } from "mongoose";

export default model(
  "Contact",
  new Schema({
    id: String,
    fullName: { type: String, required: true },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username is already taken"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [20, "Username must be at most 20 characters long"],
      trim: true,
    },
    phrase: String,
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      validate: {
        validator(url) {
          return url.startsWith("http");
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  })
);

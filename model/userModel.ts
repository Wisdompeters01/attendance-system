import { Schema, model } from "mongoose";
import { iUserData } from "../utils/interfaces";

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },

    presentTime: {
      type: String,
    },

    signInTime: {
      type: String,
    },

    role: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);

import { Schema, model } from "mongoose";

interface iUser {
  name: string;
  presentTime: string;
  signInTime: string;
  role: string;
}

interface iUserData extends iUser, Document {}

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

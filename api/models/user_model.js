import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      username: String,
      required: true,
      unique: true,
    },
    email: {
      username: String,
      required: true,
      unique: true,
    },
    password: {
      username: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;

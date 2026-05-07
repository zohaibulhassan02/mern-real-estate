import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connection.on("connecting", () => console.log("Connecting..."));
mongoose.connection.on("error", (err) => console.log("Mongoose error:", err));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000!!!");
});

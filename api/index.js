import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user_route.js";
import authRouter from "./routes/auth_route.js";

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

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

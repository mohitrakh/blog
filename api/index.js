import express from "express";
import { AuthRouter } from "./routers/authRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/api/auth", AuthRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongo database");
  })
  .catch((err) => {
    console.log("server error");
  });

app.listen(8000, () => {
  console.log("server is started on 8000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

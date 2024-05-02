import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

connectDB();
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", userRoutes);

// Port
const port = process.env.PORT || 5000;

// Listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`
  );
});

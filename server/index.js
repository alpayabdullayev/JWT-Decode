import express from 'express'
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import { AuthRoutes } from './routes/authRoutes.js';
import { UserRoutes } from './routes/userRoutes.js';


const app = express()

dotenv.config();

app.use(cors())
app.use(express.json())



const PORT = process.env.PORT
const URL = process.env.CONNECTION_URL.replace(
    "<password>",
    process.env.PASSWORD
);

mongoose
  .connect(URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("DB connection error:", err));

app.use("/api",AuthRoutes)
app.use("/api",UserRoutes)

app.listen(PORT, () => {
  console.log(`Server Connection ${PORT}`)
})
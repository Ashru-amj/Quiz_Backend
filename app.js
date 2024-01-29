import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Dotenv from "dotenv";
import dbConnect  from "./db/db.js";
const app = express();
Dotenv.config();

app.use(bodyParser.json());

app.use(cors());

// Routes 

import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import questionRoutes from './routes/question.js'
import quizRoutes from './routes/quiz.js'

app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",questionRoutes)
app.use("/api",quizRoutes)


dbConnect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

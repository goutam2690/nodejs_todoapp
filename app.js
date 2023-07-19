import express from "express";
import userRouter from "./routes/userRoutes.js";
import taskRouter from './routes/task.js';
import {config} from 'dotenv';
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from 'cors';

const app = express();
export default  app;

config({
  path: "./dotenvData/.env",
})

//using middleware
app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin : [process.env.FRONTED_URL],
  methods : ["GET","POST","PUT","DELETE"],
  credentials : true,
}));

//using userRoutes file 
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task" , taskRouter);



app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});


//express error haandling

app.use(errorMiddleware)





//importing stuffs
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
import CustomEnv from "custom-env";
CustomEnv.env();

import Quiz from "./quiz/router.js";
Grid.mongo = mongoose.mongo;

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

//db config
const mongoURI = process.env.MONGOURI;
const conn = mongoose.createConnection(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB Connected");
});

conn.once("open", () => {
  console.log("DB Connected");
});

//api routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.use("/quiz", Quiz);
//listing to port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

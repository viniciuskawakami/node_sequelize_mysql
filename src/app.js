const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ip = require("ip");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const dotenv = require("dotenv");
dotenv.config();
const ENV_VARS = process.env;
const PORT = process.env.API_PORT || 3000;
const APP_ENV = process.env.APP_ENV;
const ipAddress = ip.address();
app.get("/", (req, res) => {
  res.send("Hello from Node with ExpresJS!");
});

app.post("/data", (req, res) => {
  const data = req.body;
  res.json({ message: "Dados recebidos", data });
});

module.exports = app;

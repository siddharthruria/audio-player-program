require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

app.get("/", (_req, res) => {
  res.send("the express server is running here...");
});

app.listen(PORT, () => {
  console.log(`listening to requests on port ${PORT}`);
});

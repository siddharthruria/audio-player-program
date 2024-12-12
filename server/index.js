require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const programRoutes = require("./route/program");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

const allowedOrigins = [
  "http://localhost:3000",
  "https://audio-player-client.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("not allowed by cors"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use("/api/program", programRoutes);

app.get("/", (_req, res) => {
  res.send("the express server is running here...");
});

app.listen(PORT, () => {
  console.log(`listening to requests on port ${PORT}`);
});

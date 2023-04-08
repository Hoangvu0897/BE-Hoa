const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const loaihoaRoute = require("./router/loaihoas");
const hoaRoute = require("./router/hoas.js");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("publics"));

// Define routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.use("/loaihoas", loaihoaRoute);
app.use("/hoas", hoaRoute);

// Connect to database
console.log(process.env.DB_CONECTION);
mongoose
  .connect(process.env.DB_CONECTION, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.reason));

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

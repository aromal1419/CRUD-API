const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT || 4000;

app.use(cors());

server.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});

const userRoutes = require("./routes/users");

app.use(bodyParser.json());

app.use("/api", userRoutes);

module.exports = app;

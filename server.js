const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const app = express();

// API file for interacting with MongoDB
const api = require("./server/routes/api");

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, "dist/movieApp")));

// API location
app.use("/api", api);

app.listen(3000, () => console.log("Running on localhost:" + 3000));

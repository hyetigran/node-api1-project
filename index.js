// implement your API here
const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.post("/api/users", (req, res) => {
  const { user, bio } = req.body;
});

server.listen(5000, () => console.log("API running on port 5000"));

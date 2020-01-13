// implement your API here
const express = require("express");
const cors = require("cors");

const { find, findById, insert, remove, update } = require("./data/db");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.post("/api/users", (req, res) => {
  const newUser = req.body;
  if (!newUser.name || !newUser.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
  insert(newUser)
    .then(data => {
        res.status(201).json(data);

    })
    .catch(error => {
        res.status(500).json({
            { errorMessage: "There was an error while saving the user to the database" }
        })
    });

  }
});

server.listen(5000, () => console.log("API running on port 5000"));

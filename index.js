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
          errorMessage:
            "There was an error while saving the user to the database"
        });
      });
  }
});

server.get("/api/users", (req, res) => {
  find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "The users information could not be retrieved."
      });
    });
});

server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  findById(id)
    .then(data => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({
          errorMessage: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "The user information could not be retrieved." });
    });
});

server.listen(5000, () => console.log("API running on port 5000"));

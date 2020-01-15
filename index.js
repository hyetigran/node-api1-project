// implement your API here
const express = require("express");
const cors = require("cors");

const { find, findById, insert, remove, update } = require("./data/db");
const server = express();

server.use(cors());
server.use(express.json());

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
        //console.log("data", data);
        findById(data.id).then(user => {
          res.status(201).json(user);
        });
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

server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  remove(id)
    .then(data => {
      //console.log(data);
      if (data) {
        res.status(202).json(`User with id ${data} got deleted`);
      } else {
        res.status(404).json({
          errorMessage: `The user with the specified ID, ${id}, does not exist.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "The user could not be removed" });
    });
});

server.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const userUpdate = req.body;

  try {
    const updatedUser = await update(id, userUpdate);
    if (updatedUser.name && updatedUser.bio) {
      res.status(200).json(updatedUser);
    } else {
      res
        .status(400)
        .json({ errorMessage: "Please provide name and bio for the user." });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "The user information could not be modified."
    });
  }
});
server.listen(5000, () => console.log("API running on port 5000"));

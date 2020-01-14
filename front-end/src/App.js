import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("/api/users")
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteUser = id => {};

  const updateUser = (id, user) => {};

  const handleChange = e => {};

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/users", user)
      .then(response => {
        setUsers([...users, user]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return <div className="App"></div>;
}

export default App;

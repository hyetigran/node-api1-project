import React, { useState, useEffect } from "react";
import axios from "axios";

import UserList from "./components/userList";
import UserForm from "./components/userForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
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

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value.toUpperCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users", user)
      .then(response => {
        setUsers([...users, user]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <nav>
        <h1>Node Day 1 challenge</h1>
      </nav>
      <div className="container">
        <UserForm />
        <UserList />
      </div>
    </div>
  );
}

export default App;

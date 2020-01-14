import React, { useState, useEffect } from "react";
import axios from "axios";

import UserList from "./components/userList";
import UserForm from "./components/userForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", bio: "" });

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

  const deleteUser = id => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then(response => {
        console.log(response);
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };
  const selectUserUpdate = id => {};
  const updateUser = (id, user) => {};

  const handleChange = e => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users", user)
      .then(response => {
        setUsers([...users, user]);
        setUser({ name: "", bio: "" });
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
        <UserForm
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <UserList
          users={users}
          selectUserUpdate={selectUserUpdate}
          handleDelete={deleteUser}
        />
      </div>
    </div>
  );
}

export default App;

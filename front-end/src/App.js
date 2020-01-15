import React, { useState, useEffect } from "react";
import axios from "axios";

import UserList from "./components/userList";
import UserForm from "./components/userForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", bio: "" });
  const [editing, setEditing] = useState(false);

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
  const selectUserUpdate = id => {
    setEditing(true);
    setUser(...users.filter(user => user.id === id));
  };
  const updateUser = (e, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/users/${id}`, user)
      .then(response => {
        console.log(response);
        setUsers([...users, response.data]);
        setUser({ name: "", bio: "" });
        setEditing(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = e => {
    //console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users", user)
      .then(response => {
        console.log(response);
        setUsers([...users, response.data]);
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
          editing={editing}
          updateuser={updateUser}
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

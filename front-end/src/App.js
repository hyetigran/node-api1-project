import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  });
  const getFriends = () => {};

  const deleteFriend = id => {};

  const updateFriend = (id, updatedFriend) => {};

  const handleChange = e => {};

  const handleSubmit = e => {};
  return <div className="App"></div>;
}

export default App;

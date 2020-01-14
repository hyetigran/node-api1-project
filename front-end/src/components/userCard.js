import React from "react";

import "../App.css";

const userCard = props => {
  const { user, selectUserUpdate, handleDelete } = props;
  return (
    <div className="user-card">
      <p>{user.name}</p>
      <p>{user.bio}</p>
      <div className="card-button-container">
        <button
          onClick={() => {
            selectUserUpdate(user.id);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDelete(user.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default userCard;

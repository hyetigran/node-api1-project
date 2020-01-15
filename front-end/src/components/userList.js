import React from "react";
import UserCard from "./userCard";

import "../App.css";

const userList = props => {
  const { users, selectUserUpdate, handleDelete } = props;
  console.log(users);
  return (
    <div className="list-container">
      <h3>User List</h3>
      <div className="card-container">
        {users.length > 0 ? (
          users.map(user => {
            return (
              <UserCard
                key={user.id}
                user={user}
                selectUserUpdate={selectUserUpdate}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <div className="empty-list">
            <h3>The User List is Empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default userList;

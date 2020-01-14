import React from "react";
import UserCard from "./userCard";

const userList = props => {
  const { users, selectUserUpdate, handleDelete } = props;
  return (
    <div>
      <h3>User List</h3>

      {users &&
        users.map(user => {
          return (
            <UserCard
              key={user.id}
              user={user}
              selectUserUpdate={selectUserUpdate}
              handleDelete={handleDelete}
            />
          );
        })}
    </div>
  );
};

export default userList;

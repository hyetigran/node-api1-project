import React from "react";
import "../App.css";
const userForm = props => {
  const { handleSubmit, handleChange, user, editing, updateUser } = props;
  return (
    <div>
      <h2>{!editing ? "Add a User" : "Edit User"}</h2>
      <form className="user-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="name"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <label>
          Bio:
          <input
            type="text"
            name="bio"
            value={user.bio}
            placeholder="bio"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        {!editing ? (
          <button
            type="submit"
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Add
          </button>
        ) : (
          <button
            type="submit"
            onClick={e => {
              console.log("clicked 1");
              updateUser(e, user.id);
            }}
          >
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default userForm;

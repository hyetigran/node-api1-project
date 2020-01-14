import React from "react";
import "../App.css";
const userForm = props => {
  const { handleSubmit, handleChange, user } = props;
  return (
    <div>
      <h2>Add a User</h2>
      <form
        className="user-form"
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <label>
          {" "}
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
          {" "}
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
        <button>Add</button>
      </form>
    </div>
  );
};

export default userForm;

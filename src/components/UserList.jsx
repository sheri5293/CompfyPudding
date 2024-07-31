/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import UserProfile from "./UserProfile";

const UserList = ({ users }) => {
  return (
    <div>
      <div>
        {users.map((user) => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="avatar" />
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { fetchUsers, getAvatarUrl } from "./services/Api";
import UserList from "./components/UserList";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetchUsers();
      const usersAvatars = userData.map((user) => ({
        ...user,
        avatar: getAvatarUrl(user.username),
      }));
      setUsers(usersAvatars);
      setLoading(false);
    };
    loadUsers();
  }, []);
  return (
    <>
      <div>{loading ? <LoadingSpinner /> : <UserList users={users} />}</div>
    </>
  );
}

export default App;

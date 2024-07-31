/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { fetchUsers, getAvatarUrl } from "./services/Api";
import UserList from "./components/UserList";
import StreachingSpinner from "./components/StreachingSpinner";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delayTime, setDelayTime] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userData = await fetchUsers();
        const usersAvatars = userData.map((user) => ({
          ...user,
          avatar: getAvatarUrl(user.username),
        }));
        setUsers(usersAvatars);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadUsers();
  }, []);
  useEffect(() => {
    const delay = 2000;
    const timer = () => setDelayTime(true);
    setTimeout(timer, delay);
  }, []);

  return (
    <>
      {loading || !delayTime ? (
        <StreachingSpinner />
      ) : (
        <UserList users={users} />
      )}
    </>
  );
}

export default App;

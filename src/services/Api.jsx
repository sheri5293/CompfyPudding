const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const response = await fetch(USERS_URL);
  return response.json();
};

export const getAvatarUrl = (username) => {
  return `https://api.dicebear.com/9.x/lorelei/svg?seed=${username}`;
};

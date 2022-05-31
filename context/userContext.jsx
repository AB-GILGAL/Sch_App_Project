import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext({
  users: [],
  filteredUsers: [],
  setUsers: () => null,
  searchUser: (search) => null,
  setFilteredUsers: () => null,
  addUser: (user) => null,
});

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchUser = (search) => {
    const matchedUser = users.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(matchedUser);
  };

  const addUser = (user) => {
    const newUser = users.map((sch) => {
      if (us._id === user._id) return user;
      return us;
    });
    setSchools(newUser);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <UserContext.Provider
      value={{
        filteredUsers,
        setFilteredUsers,
        setUsers,
        searchUser,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

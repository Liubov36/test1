import { Global } from "@emotion/react";
import globalStyles from "../../global.css";
import localeUsers from "../../users.json";
import { CardList } from "../List/List";
import { Layout, MainTitle } from "./App.styled";
import { useEffect, useState } from "react";

const USERS_STORAGE_KEY = "localUsers";

export const App = () => {
  const [users, setUsers] = useState([]);

  const handleUpdateUser = (id, isFollowing, followers) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, isFollowing, followers } : user
      )
    );
  };

  useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));

    if (storageUsers && storageUsers.length > 0) {
      setUsers(storageUsers);
    } else {
      setUsers(localeUsers);
    }
  }, []);

  useEffect(() => {
    const stringifyUsers = JSON.stringify(users);
    localStorage.setItem(USERS_STORAGE_KEY, stringifyUsers);
  }, [users]);

  return (
    <Layout>
      <Global styles={globalStyles} />
      <MainTitle></MainTitle>
      <CardList users={users} update={handleUpdateUser} />
    </Layout>
  );
};
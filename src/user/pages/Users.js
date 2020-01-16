import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Adrian Gomez",
      image:
        "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

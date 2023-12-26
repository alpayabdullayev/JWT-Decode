import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(localStorage.getItem("role")  || null);

  const data = { user, setUser, role, setRole, token, setToken };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

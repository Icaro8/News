import React, { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
const UserProvider = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  async function userLocal() {
    const local = await localStorage.getItem("IcaroNews");
    const { email, name, picture } = await jwt_decode(local);
    setUser({ email: email, name: name, picture: picture });
    console.log(user);
  }
  return (
    <UserProvider.Provider value={{ user, setUser, userLocal }}>
      {children}
    </UserProvider.Provider>
  );
}

export function useUser() {
  const data = useContext(UserProvider);
  return data;
}

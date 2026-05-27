import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("userId") || null);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUserId(null);
  };

  const storeUser = (newUserId) => {
    localStorage.setItem("userId", newUserId);
    setCurrentUserId(newUserId);
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        currentUserId,
        storeUser,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
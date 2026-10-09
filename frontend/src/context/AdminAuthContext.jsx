import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuthToken, setAuthToken, clearAuthToken, isAdminAuthenticated, verifyAdminToken } from '../services/api';

const AdminAuthContext = createContext({
  isAuthenticated: false,
  token: null,
  login: () => {},
  logout: () => {},
  checkAuth: async () => false
});

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => getAuthToken());
  const [isAuthenticated, setIsAuthenticated] = useState(() => isAdminAuthenticated());

  useEffect(() => {
    setIsAuthenticated(Boolean(token && token.trim().length > 10));
  }, [token]);

  const login = (newToken) => {
    setAuthToken(newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearAuthToken();
    setToken(null);
    setIsAuthenticated(false);
  };

  const checkAuth = async () => {
    if (!isAdminAuthenticated()) {
      setIsAuthenticated(false);
      return false;
    }
    const valid = await verifyAdminToken();
    if (!valid) {
      logout();
      return false;
    }
    setIsAuthenticated(true);
    return true;
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, token, login, logout, checkAuth }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);
export default AdminAuthContext;

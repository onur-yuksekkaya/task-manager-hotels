import { createContext, useContext } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const AuthContext = createContext('');

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('hotelApiUser', '');

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuth, AuthProvider };

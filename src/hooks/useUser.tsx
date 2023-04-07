import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SteamUser } from '../lib/passport';

interface UserContextType {
  user: SteamUser | null;
}

const UserContext = createContext<UserContextType>(null);

export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<SteamUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/api/auth/user');
      setUser(await response.json());
    };

    getUser();
  }, []);

  const contextValue: UserContextType = {
    user: user,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

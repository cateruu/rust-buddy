import { ReactNode, createContext, useContext, useState } from 'react';
import { SteamUser } from '../lib/passport';

interface UserContextType {
  user: SteamUser | null;
  setUser: (user: SteamUser) => void;
}

const UserContext = createContext<UserContextType>(null);

export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<SteamUser | null>(null);

  const handleSetUser = (user: SteamUser) => {
    setUser(user);
  };

  const contextValue: UserContextType = {
    user: user,
    setUser: handleSetUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

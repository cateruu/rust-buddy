import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SteamUser } from '../lib/passport';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  steamId: number;
  steamUrl: string;
  displayName: string;
  photo: string;
  country: string;
  finderAccount: string;
  createdAt: string;
  lastActivity: string;
}

interface UserContextType {
  user: User | null;
  isUserLoading: boolean;
  refetchUser: (id: string) => void;
}

const UserContext = createContext<UserContextType>(null);

export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/api/auth/user');
      const steamUser: SteamUser = await response.json();

      if (!steamUser?.id) {
        setUser(null);
        setIsUserLoading(false);
        return;
      }

      const { data } = await supabase
        .from('users')
        .select()
        .eq('steam_id', steamUser.id);

      setUser({
        id: data[0].id,
        steamId: data[0].steam_id,
        steamUrl: data[0].steam_url,
        displayName: data[0].displayName,
        photo: data[0].photo,
        country: data[0].country,
        finderAccount: data[0].finder_account,
        createdAt: data[0].created_at,
        lastActivity: data[0].last_activity,
      });
      setIsUserLoading(false);
    };

    getUser();
  }, []);

  const refetchUser = async (id: string) => {
    const { data, error } = await supabase.from('users').select().eq('id', id);

    if (error) {
      setUser(null);
      return;
    }

    setUser({
      id: data[0].id,
      steamId: data[0].steam_id,
      steamUrl: data[0].steam_url,
      displayName: data[0].displayName,
      photo: data[0].photo,
      country: data[0].country,
      finderAccount: data[0].finder_account,
      createdAt: data[0].created_at,
      lastActivity: data[0].last_activity,
    });
  };

  const contextValue: UserContextType = {
    user: user,
    isUserLoading: isUserLoading,
    refetchUser: refetchUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

import { createContext, useState } from "react";

type Context = {
  children: React.ReactNode;
};

type User = {
  email: string;
  password: string;
  authenticated: boolean;
};

const initialState: User = {
  email: "",
  password: "",
  authenticated: false,
};

export const UserContext = createContext({
  user: initialState,
  setUser: (e: any) => e,
});

export const UserContextProvider = ({ children }: Context) => {
  const [user, setUser] = useState(initialState);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

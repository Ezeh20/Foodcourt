import { createContext, useState, useEffect } from "react";

const initialData = {
  email: "",
  password: "",
  authenticated: false,
};

type ChildrenContext = {
  children: React.ReactNode;
};

type User = {
  email: string;
  password: string;
  authenticated: boolean;
};

interface StateType {
  user: User;
  setUser: (user: User) => void;
}

const initialState: StateType = {
  user: initialData,
  setUser: () => {},
};

export const UserContext = createContext<StateType>(initialState);

export const UserContextProvider = ({ children }: ChildrenContext) => {
  const storedNotes: string | null = localStorage.getItem("user");
  const saved = storedNotes !== null && JSON.parse(storedNotes);

  const [user, setUser] = useState(saved ?? initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface UserDataValue {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUserLogged: (userData:any) => void;
}

const UserContext = createContext<UserDataValue>({
  email: "",
  password: "",
  setEmail: () => {},
  setPassword: () => {},
  setUserLogged: () => {},
});

export default UserContext;


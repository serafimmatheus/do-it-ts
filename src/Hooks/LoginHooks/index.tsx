import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { LoginData } from "../../Types.ts/Login";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";

interface LoginProviderProps {
  handleLogin: (data: LoginData) => Promise<void>;
  data: AuthState;
  handleSignOut: () => void;
}

const LoginContext = createContext<LoginProviderProps>(
  {} as LoginProviderProps
);

interface LoginChildren {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

const useLogin = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("LoginProvider must be used within an Provider");
  }

  return context;
};

const LoginProvider = ({ children }: LoginChildren) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@token-doit");
    const user = localStorage.getItem("@token-doit-user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const handleLogin = useCallback(async (data: LoginData) => {
    const response = await api.post("/login", data);

    const { accessToken, user } = response.data;

    localStorage.setItem("@token-doit", accessToken);
    localStorage.setItem("@token-doit-user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("@token-doit");
    localStorage.removeItem("@token-doit-user");

    setData({} as AuthState);
  };

  return (
    <LoginContext.Provider value={{ handleLogin, data, handleSignOut }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, useLogin };

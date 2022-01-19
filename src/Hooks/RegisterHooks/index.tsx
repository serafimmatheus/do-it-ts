import { createContext, ReactNode, useCallback, useContext } from "react";

import { api } from "../../Services/api";

interface RegisterChildren {
  children: ReactNode;
}

interface RegisterProviderProps {
  handleRegister: (data: any) => Promise<void>;
}

const RegisterContext = createContext<RegisterProviderProps>(
  {} as RegisterProviderProps
);

export const useRegister = () => {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error("RegisterContext must be used within an Provider");
  }

  return context;
};

export const RegisterProvider = ({ children }: RegisterChildren) => {
  const handleRegister = useCallback(async (data: any) => {
    const response = await api.post("/register", data);
  }, []);

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

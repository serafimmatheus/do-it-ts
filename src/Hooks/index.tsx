import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../Styles/Theme";
import { LoginProvider } from "./LoginHooks";
import { RegisterProvider } from "./RegisterHooks";
import { TarefasProviders } from "./TarefasHooks";

interface ChildrenProps {
  children: ReactNode;
}

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <TarefasProviders>
      <RegisterProvider>
        <LoginProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </LoginProvider>
      </RegisterProvider>
    </TarefasProviders>
  );
};

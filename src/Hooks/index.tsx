import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/Theme";
import { LoginProvider } from "./LoginHooks";
import { RegisterProvider } from "./RegisterHooks";

interface ChildrenProps {
  children: ReactNode;
}

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

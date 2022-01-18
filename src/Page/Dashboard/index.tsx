import { Button, Text } from "@chakra-ui/react";
import { useLogin } from "../../Hooks/LoginHooks";
import { Header } from "../../Components/Header";

export const Dashboard = () => {
  const { handleSignOut } = useLogin();
  return (
    <>
      <Header />
      <Text>
        Dashboard<Button onClick={handleSignOut}>Sair</Button>
      </Text>
    </>
  );
};

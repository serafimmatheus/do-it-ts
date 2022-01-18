import { Flex } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";

import { LoginInfo } from "./LoginInfo";

export const Login = () => {
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px "]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "70%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <LoginInfo />

        <LoginForm />
      </Flex>
    </Flex>
  );
};

import { Flex } from "@chakra-ui/react";
import { RegisterForm } from "./RegisterForm";
import { RegisterInfo } from "./RegisterInfo";

export const Register = () => {
  return (
    <Flex
      height="100vh"
      padding={["10px 15px", "10px 15px", "0px", "0px "]}
      alignItems="center"
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
      ]}
    >
      <Flex
        w={["100%", "100%", "90%", "70%"]}
        justifyContent="center"
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        // alignItems="center"
      >
        <RegisterForm />
        <RegisterInfo />
      </Flex>
    </Flex>
  );
};

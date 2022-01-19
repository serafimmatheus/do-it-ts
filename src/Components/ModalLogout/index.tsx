import jwtDecode from "jwt-decode";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

import group82 from "../../Assets/Group82.svg";
import { useLogin } from "../../Hooks/LoginHooks";

interface ErrorsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLogOut = ({ isOpen, onClose }: ErrorsProps) => {
  const [token] = useState(localStorage.getItem("@token-doit") || "");
  const userDecode = jwtDecode<any>(token);

  const { handleSignOut } = useLogin();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent zIndex="1" position="absolute" right={["", "", "5%"]}>
        <Flex w="100%">
          <ModalHeader fontSize="18px">{userDecode.email}</ModalHeader>
        </Flex>

        <Flex w="100%" padding="20px">
          <Image
            src={group82}
            w="60px"
            h="60px"
            color="white"
            bgColor="red.600"
            mr={3}
            onClick={handleSignOut}
            _hover={{
              background: "red.700",
            }}
          />

          <Flex flexDirection="column">
            <Heading w="100%" fontSize={["20px"]}>
              Sair da minha conta
            </Heading>
            <Text w="100%" color="gray.400">
              Sair da minha conta agora
            </Text>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

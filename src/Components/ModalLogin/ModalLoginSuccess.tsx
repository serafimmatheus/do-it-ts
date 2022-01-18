import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import group99 from "../../Assets/Group99.svg";

interface ErrorsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLoginSuccess = ({ isOpen, onClose }: ErrorsProps) => {
  const history = useHistory();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={["300px"]}>
        <Flex w="100%" ml="20px">
          <Image src={group99} alt="error" />
          <ModalHeader>Yeess...</ModalHeader>
        </Flex>
        <ModalCloseButton
          bgColor="red.600"
          color="white"
          _hover={{ background: "red.700" }}
        />
        <ModalBody>
          <Text color="gray.400" textAlign="center">
            Seu cadastro deu super certo,{" "}
            <span style={{ color: "black" }}>vamos lá</span>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            h="60px"
            color="white"
            bgColor="purple.500"
            mr={3}
            onClick={() => {
              onClose();
              history.push("/");
            }}
            _hover={{
              background: "purple.600",
            }}
          >
            Ir para login agora
          </Button>
        </ModalFooter>
        <Text textAlign="center" padding="20px" color="gray.400">
          Você já pode começar criando
          <b> suas listas</b> no botão acima ou de tarefas agora mesmo...
        </Text>
      </ModalContent>
    </Modal>
  );
};

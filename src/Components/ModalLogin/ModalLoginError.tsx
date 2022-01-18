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

import group88 from "../../Assets/Group88.svg";

interface ErrorsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLoginError = ({ isOpen, onClose }: ErrorsProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={["300px"]}>
        <Flex w="100%" ml="20px">
          <Image src={group88} alt="error" />
          <ModalHeader>Oops...</ModalHeader>
        </Flex>
        <ModalCloseButton
          bgColor="red.600"
          color="white"
          _hover={{ background: "red.700" }}
        />
        <ModalBody>
          <Text color="gray.400" textAlign="center">
            Ocorreu algum erro!
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            h="60px"
            color="white"
            bgColor="red.600"
            mr={3}
            onClick={onClose}
            _hover={{
              background: "red.700",
            }}
          >
            Tente novamente!
          </Button>
        </ModalFooter>
        <Text textAlign="center" padding="20px" color="gray.400">
          Você já pode tentar novamente,
          <b> clicando</b> no botão acima ou aguarde alguns minutos...
        </Text>
      </ModalContent>
    </Modal>
  );
};

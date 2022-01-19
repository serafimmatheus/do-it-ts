import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { FaRegClipboard } from "react-icons/fa";
import { ModalTasks } from "../ModalTasks";

export const NewPageTarefas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalTasks isOpen={isOpen} onClose={onClose} />
      <Grid mt="50px" padding={["15px", "15px", "0 100px"]}>
        <Flex
          flexDirection="column"
          border="2px dashed"
          borderColor="gray.200"
          padding="20px"
          alignItems="center"
          justifyContent="center"
          h={["auto", "auto", "300px"]}
        >
          <VStack spacing="5">
            <FaRegClipboard size="40px" color="#bdbdbd" />
            <Heading textAlign="center">
              Vamos criar sua primeira tarefa
            </Heading>
            <Text color="gray.400">
              Insira sua meta e mostre a você mesmo sua <br /> capacidade em
              cumprir <b>suas atividades</b>
            </Text>

            <Button
              bg="purple.800"
              color="white"
              _hover={{ background: "purple.900" }}
              onClick={() => onOpen()}
            >
              Criar minha primeira tarefa
            </Button>
          </VStack>
        </Flex>
      </Grid>
    </>
  );
};

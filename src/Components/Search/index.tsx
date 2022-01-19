import { Input } from "../Form/Input";
import { FaSistrix } from "react-icons/fa";
import { Box, Button, Flex, Grid, useDisclosure } from "@chakra-ui/react";
import { ModalTasks } from "../ModalTasks";

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalTasks isOpen={isOpen} onClose={onClose} />

      <Grid
        mt="20px"
        w={["auto", "auto", "auto", "auto"]}
        flexDirection={["column", "column", "row", "row"]}
        display="flex"
      >
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          padding={["0 20px", "0 20px", "0 0 0 20px", "0 0 0 40px"]}
        >
          <Box w="100%">
            <Input name="teste" placeholder="Pesquise por tarefa" />
          </Box>
          <Button
            bg="purple.600"
            ml="8px"
            w="65px"
            h="60px"
            _hover={{
              background: "purple.700",
            }}
          >
            <FaSistrix color="white" fontSize="30px" />
          </Button>
        </Flex>

        <Flex padding="0 20px">
          <Button
            w="100%"
            color="white"
            bg="purple.500"
            mt={["20px", "20px", "0px"]}
            h={["60px"]}
            _hover={{
              background: "purple.600",
            }}
            onClick={() => onOpen()}
          >
            Adicionar nova tarefa
          </Button>
        </Flex>
      </Grid>
    </>
  );
};

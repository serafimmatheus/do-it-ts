import { Input } from "../Form/Input";
import { FaSistrix } from "react-icons/fa";
import { Box, Button, Flex, Grid, useDisclosure } from "@chakra-ui/react";
import { ModalTasks } from "../ModalTasks";

interface Searchprops {
  setIsSearch: any;
  isSearch: boolean;
}

export const Search = ({ setIsSearch, isSearch }: Searchprops) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalTasks isOpen={isOpen} onClose={onClose} />

      <Grid
        padding="20px 0"
        w={["auto", "auto", "auto", "auto"]}
        flexDirection={["column", "column", "row", "row"]}
        display="flex"
        borderBottom="2px solid"
        borderColor="gray.100"
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
            onClick={() => setIsSearch(!isSearch)}
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

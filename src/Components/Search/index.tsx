import { Input } from "../Form/Input";
import { FaSistrix } from "react-icons/fa";
import { Box, Button, Flex, Grid, useDisclosure } from "@chakra-ui/react";
import { ModalTasks } from "../ModalTasks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTarefas } from "../../Hooks/TarefasHooks";
import { useLogin } from "../../Hooks/LoginHooks";

interface Searchprops {
  setIsSearch: any;
  isSearch: boolean;
}

export const Search = ({ setIsSearch, isSearch }: Searchprops) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm();

  const { searchTask } = useTarefas();

  const { data } = useLogin();

  const handleSearchTasks = (search: any) => {
    searchTask(search.title, data.accessToken);
  };

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
          as="form"
          onSubmit={handleSubmit(handleSearchTasks)}
          w={["100%", "100%", "100%", "50%"]}
          padding={["0 20px", "0 20px", "0 0 0 20px", "0 0 0 40px"]}
        >
          <Box w="100%">
            <Input {...register("title")} placeholder="Pesquise por tarefa" />
          </Box>
          <Button
            bg="purple.600"
            ml="8px"
            w="65px"
            h="60px"
            _hover={{
              background: "purple.700",
            }}
            type="submit"
            onClick={() => setIsSearch(true)}
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

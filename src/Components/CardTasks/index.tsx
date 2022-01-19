import { Box, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useTarefas } from "../../Hooks/TarefasHooks";

interface CardProps {
  id: number;
  title: string;
  description: string;
}

export const CardTasks = ({ title, description, id }: CardProps) => {
  const { deleteTasks } = useTarefas();
  return (
    <Grid
      w={["320px", "384px"]}
      h="auto"
      bg="gray.100"
      padding="20px"
      margin={["10px 0px"]}
    >
      <Flex alignItems="center" justifyContent="space-between" mb="3">
        <Heading size="md">{title}</Heading>
        <Flex>
          <Box
            marginRight="10px"
            w="30px"
            h="30px"
            border=" 1px solid"
            borderColor="gray.200"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="5px"
          >
            <FaTrash onClick={() => deleteTasks(id)} />
          </Box>

          <Box
            w="30px"
            h="30px"
            border=" 1px solid"
            borderColor="gray.200"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="5px"
          >
            <FaCheck />
          </Box>
        </Flex>
      </Flex>

      <VStack spacing="5">
        <Text>{description}</Text>

        <Box
          w="100%"
          h="10px"
          bgGradient={["linear(to-r, purple.800 15%, gray.200 15%)"]}
        ></Box>
      </VStack>

      <Text mt="5">07 March 2021</Text>
    </Grid>
  );
};

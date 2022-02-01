import {
  Box,
  Center,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTarefas } from "../../Hooks/TarefasHooks";

export const NotFound = () => {
  const { notFoundTask } = useTarefas();
  return (
    <Center flexDirection={"column"}>
      <Flex flexDirection={"column"} mt="10">
        <Heading>Não encontramos nenhum resultado para:</Heading>
        <Text mt="6" fontSize={"20px"} color={"gray.400"} textAlign={"center"}>
          {notFoundTask}
        </Text>
      </Flex>

      <Box mt="6" w={["80%", "40%"]} padding={"6"} boxShadow={"lg"} bg="white">
        <Stack>
          <Skeleton
            w={"50%"}
            startColor="gray.100"
            endColor="gray.300"
            height={"20px"}
          ></Skeleton>
          <Skeleton
            startColor="gray.100"
            endColor="gray.300"
            height={"20px"}
          ></Skeleton>
          <Skeleton
            startColor="gray.100"
            endColor="gray.300"
            height={"70px"}
          ></Skeleton>
          <Skeleton
            w={"30%"}
            startColor="gray.100"
            endColor="gray.300"
            height={"20px"}
          ></Skeleton>
        </Stack>
      </Box>
    </Center>
  );
};

import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  useToast,
  Progress,
} from "@chakra-ui/react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useLogin } from "../../Hooks/LoginHooks";
import { useTarefas } from "../../Hooks/TarefasHooks";

interface CardProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface HandleDeleteProps {
  id: number;
}

export const CardTasks = ({ title, description, id, completed }: CardProps) => {
  const toast = useToast();

  const { data } = useLogin();

  const { deleteTasks, myTasks, updateTask, getTasks } = useTarefas();

  const handleDelete = (id: any) => {
    deleteTasks(id)
      .then((_) => {
        toast({
          title: "Tarefa deletada",
          description: "Você deletou uma tarefa.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((_) => {
        toast({
          title: `Ops, algo deu errado.`,
          status: "error",
          isClosable: true,
        });
      });
  };

  const handleUpdateTask = (id: number) => {
    updateTask(id, data.accessToken, data.user.id).then((_) => {
      getTasks(data.user.id, data.accessToken);
    });
  };

  return (
    <Flex
      flexDirection="column"
      w={["320px", "384px"]}
      h="auto"
      bg="gray.100"
      padding="20px"
      margin={["10px 0px", "10px 0px", "10px"]}
      justifyContent="center"
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
            <FaTrash onClick={() => handleDelete(id)} />
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
            bgColor={completed ? "purple.700" : "transparent"}
          >
            <FaCheck
              color={completed ? "white" : "black"}
              onClick={() => handleUpdateTask(id)}
            />
          </Box>
        </Flex>
      </Flex>

      <VStack spacing="5">
        <Text>{description}</Text>

        <Progress
          colorScheme="purple"
          w="100%"
          value={completed ? 100 : 10}
          bg="gray.200"
        />
      </VStack>

      <Text mt="5">07 March 2021</Text>
    </Flex>
  );
};

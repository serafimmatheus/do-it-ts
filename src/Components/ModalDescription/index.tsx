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
  Box,
  Progress,
} from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import visualizar from "../../Assets/visualizar.svg";
import { useLogin } from "../../Hooks/LoginHooks";
import { useTarefas } from "../../Hooks/TarefasHooks";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface ErrorsProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
}

export const ModalDescription = ({ isOpen, onClose, task }: ErrorsProps) => {
  const history = useHistory();

  const { deleteTasks, updateTask, getTasks } = useTarefas();

  const { data } = useLogin();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay w="100%" h="100vh" />
      <ModalContent
        w={["320px", "320px", "400px"]}
        minH="300px"
        display="flex"
        flexDirection="column"
        justifyContent={["center"]}
      >
        <Flex w="100%" ml="20px">
          <Image src={visualizar} alt="error" />
          <ModalHeader>Visualizar</ModalHeader>

          <Flex mt="8px" ml={["0px", "80px", "80px"]}>
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
              cursor="pointer"
            >
              <FaTrash onClick={() => deleteTasks(task.id)} />
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
              cursor="pointer"
              bgColor={task.completed ? "purple.700" : "transparent"}
            >
              <FaCheck
                color={task.completed ? "white" : "black"}
                onClick={() => {
                  updateTask(task.id, data.accessToken, data.user.id);
                  getTasks(data.user.id, data.accessToken);
                }}
              />
            </Box>
          </Flex>
        </Flex>

        <ModalCloseButton
          bgColor="red.600"
          color="white"
          _hover={{ background: "red.700" }}
        />
        <ModalBody>
          <ModalHeader color="gray.400" textAlign="center">
            {task.title}
          </ModalHeader>

          <Box h={["100px"]} overflowY={["scroll"]}>
            <Text color="gray.400">{task.description}</Text>
          </Box>

          <Progress
            colorScheme="purple"
            w="100%"
            mt="30px"
            mb="30px"
            value={task.completed ? 100 : 10}
            bg="gray.200"
          />

          <Text>7 March 2021</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

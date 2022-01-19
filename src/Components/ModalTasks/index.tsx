import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Textarea,
  ModalCloseButton,
  Button,
  Flex,
  Image,
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import group100 from "../../Assets/Group100.svg";
import { useTarefas } from "../../Hooks/TarefasHooks";
import { Input } from "../Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ModalTasksProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalTasks = ({ isOpen, onClose }: ModalTasksProps) => {
  const { handleTasks, getTasks } = useTarefas();

  const schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    description: yup.string().required("Título obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleTarefasSubmit = (data: any) => {
    handleTasks(data)
      .then((_) => {
        reset();
        onClose();
        getTasks();
      })
      .catch((_) => {});
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleTarefasSubmit)}
        padding="20px"
      >
        <Flex>
          <Image src={group100} alt="Img tasks" />
          <ModalHeader>Adicionar</ModalHeader>
        </Flex>
        <ModalCloseButton />

        <VStack spacing="5">
          <Box w="100%">
            <Input
              label="Título"
              placeholder="Digite seu título"
              {...register("title")}
            />
          </Box>

          <Box w="100%">
            <Text mb="1" ml="1" color="gray.400">
              Descrição
            </Text>

            <Textarea
              {...register("description")}
              resize="none"
              placeholder="Digite sua descrição"
            />
          </Box>

          <Box w="100%">
            <Text mb="1" ml="1" color="gray.300">
              Maximo 100 caracteres
            </Text>
          </Box>
        </VStack>

        <ModalFooter>
          <Button
            w="100%"
            bg="purple.800"
            color="white"
            _hover={{
              background: "purple.900",
            }}
            mr={3}
            type="submit"
          >
            Criar tarefa
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// <ModalBody>
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
// voluptas iure tenetur atque provident, eum deleniti, quidem impedit
// error aut saepe itaque commodi, necessitatibus maiores temporibus
// facilis. Accusantium, culpa veritatis.
// </ModalBody>

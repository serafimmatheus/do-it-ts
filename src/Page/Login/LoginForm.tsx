import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Input } from "../../Components/Form/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useLogin } from "../../Hooks/LoginHooks";
import { useHistory } from "react-router-dom";

interface SignInData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState("");

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleLogin } = useLogin();

  const handleSignIn = (data: any) => {
    setIsLoading(true);
    handleLogin(data)
      .then((_) => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const history = useHistory();

  const redirectRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <Grid
        onSubmit={handleSubmit(handleSignIn)}
        as="form"
        mt="4"
        w={["100%", "100%", "40%", "40%"]}
        padding="30px 15px"
        border="3px solid"
        borderColor="gray.100"
        bg="white"
        color="gray.900"
      >
        <Heading size="lg">Bem vindo de volta!</Heading>
        <VStack mt="5" spacing="5">
          <Box w="100%">
            <Input
              placeholder="Digite seu login"
              icon={FaEnvelope}
              {...register("email")}
              label="Login"
              type="email"
              error={errors.email}
            />

            {!errors.email && (
              <Text ml="1" mt="1" color="gray.300">
                Exemplo: name@email.com
              </Text>
            )}
          </Box>

          <Input
            placeholder="Digite sua senha"
            icon={FaLock}
            {...register("password")}
            label="Senha"
            type="password"
            error={errors.password}
          />
        </VStack>

        <VStack mt="5" spacing="5">
          <Button
            isLoading={isLoading}
            w="100%"
            h="60px"
            color="white"
            bgColor="purple.800"
            type="submit"
            borderRadius="8px"
            _hover={{ background: "purple.900" }}
          >
            Enviar
          </Button>

          <Text color="gray.400">Ainda não possui uma conta?</Text>

          <Button
            w="100%"
            h="60px"
            color="gray.300"
            bgColor="gray.100"
            borderRadius="8px"
            _hover={{ background: "gray.200" }}
            onClick={redirectRegister}
          >
            Cadastrar
          </Button>
        </VStack>
      </Grid>
    </>
  );
};

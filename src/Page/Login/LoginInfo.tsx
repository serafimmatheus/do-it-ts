import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import secondary from "../../Assets/logo-secondary.svg";

export const LoginInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingRight={["0px", "0px", "100px", "100px"]}
    >
      <Image
        src={secondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading mt="4" mb="10px" as="h1">
        O jeito fácil, grátis
      </Heading>
      <Text mb={["50px", "50px", "10px"]}>
        Flexível e atrativo de gerenciar
        <b> seus projetos em uma única plataforma</b>
      </Text>
    </Grid>
  );
};

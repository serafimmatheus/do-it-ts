import { Box, Flex, Grid, Heading, Image, Text, theme } from "@chakra-ui/react";
import secondary from "../../Assets/logo-secondary.svg";
import vector from "../../Assets/Vector.svg";
import { FaLayerGroup } from "react-icons/fa";

export const RegisterInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingLeft={["0px", "0px", "50px", "100px"]}
      mt={["450px", "270px", "0px"]}
    >
      <Image
        src={secondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Flex mt="4" mb="10px">
        <Flex
          w="47px"
          h="50px"
          bgColor="white"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
        >
          <Image w="24px" h="17px" src={vector} alt="Vector" />
        </Flex>

        <Flex
          flexDirection="column"
          ml={["15px", "15px", "30px", "30px"]}
          w={["200px", "200px"]}
        >
          <Heading as="h2" color="white" size="lg">
            Agilidade
          </Heading>
          <Text as="p" color="white">
            Agilize seus projetos com rapidez e muita performance
          </Text>
        </Flex>
      </Flex>

      <Flex mt="4" mb="10px">
        <Flex
          w="47px"
          h="50px"
          bgColor="white"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
        >
          <FaLayerGroup color="#38085c" />
        </Flex>

        <Flex
          flexDirection="column"
          ml={["15px", "15px", "30px", "30px"]}
          w={["200px", "200px"]}
        >
          <Heading as="h2" color="white" size="lg">
            Simplicidade
          </Heading>
          <Text as="p" color="white">
            Armazene seus projetos em uma interface altamente usual
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
};

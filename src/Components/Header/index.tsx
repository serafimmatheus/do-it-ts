import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import icon from "../../Assets/Icon.svg";

export const Header = () => {
  return (
    <Grid padding="10px 50px">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image w="60px" h="60px" src={icon} alt="dashboard" />
          <Heading ml="3" size="lg">
            Dashboard
          </Heading>
        </Flex>

        <Flex>
          <FaBars size="30px" />
        </Flex>
      </Box>
    </Grid>
  );
};

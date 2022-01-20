import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTh } from "react-icons/fa";
import icon from "../../Assets/Icon.svg";
import { ModalLogOut } from "../ModalLogout";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalLogOut isOpen={isOpen} onClose={onClose} />
      <Grid
        borderBottom="2px"
        borderColor="gray.100"
        as="header"
        padding={["10px", "10px 50px"]}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={["space-around", "space-between"]}
        >
          <Flex alignItems="center">
            <Image w="60px" h="60px" src={icon} alt="dashboard" />
            <Heading ml="3" size="lg">
              Dashboard
            </Heading>
          </Flex>

          <Flex>
            <FaTh onClick={() => onOpen()} size="30px" />
          </Flex>
        </Box>
      </Grid>
    </>
  );
};

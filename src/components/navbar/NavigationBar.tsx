import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";

const NavigationBar = () => {
  const { AuthLogout } = useAuth();
  return (
    <Box
      as={Flex}
      mx={3}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={6}
      my={2}
      p={6}
      bg={"white"}
    >
      <Heading size="lg">MENU</Heading>
      <Button onClick={() => AuthLogout()} bg={"red.600"}>
        Logout
      </Button>
    </Box>
  );
};

export default NavigationBar;

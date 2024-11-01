import { Box } from "@chakra-ui/react";
import { Authorize } from "../features/auth/Authorize";
import AuthLayout from "../layouts/AuthLayout";

const AuthenticationPage = () => {
  return (
    <AuthLayout
      content={
        <Box
          position="relative"
          h={"100vh"}
          bgImage="url('https://images.pexels.com/photos/2422285/pexels-photo-2422285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          bgSize="cover"
          bgPos={"center"}
          bgRepeat="no-repeat"
          left={0}
          right={0}
          width="100vw"
          maxWidth="100%"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            bg="black"
            opacity={0.8}
            bgBlendMode="multiply"
          />
        </Box>
      }
    >
      <Authorize />
    </AuthLayout>
  );
};

export default AuthenticationPage;

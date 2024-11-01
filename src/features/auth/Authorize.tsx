"use client";

import { Box, Flex, Heading, Input, Link, Text } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";
import { Checkbox } from "../../components/ui/checkbox";
import { Alert } from "../../components/ui/alert";

import { BiError } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
import { AuthorizeUser } from "./services/authService";

interface FormValues {
  Username: string;
  Password: string;
  keepLogged: boolean;
}

export const Authorize = () => {
  const navigate = useNavigate();
  const { AuthLogin } = useAuth();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  //const { setCurrentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const res: any = await AuthorizeUser(data);
    if (!res.error) {
      AuthLogin(res.response ?? "", data.keepLogged);
      navigate("/admin/dashboard");
    } else {
      setErrorMessage(res.error);
      setHasError(true);
    }
  });

  return (
    <Box as={Flex} alignItems={"center"} h={"100%"} w={"100%"}>
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <Box gap="4" w={"100%"}>
          <Heading size="4xl">Admin Login</Heading>
          <Text>Please enter your login details</Text>
          <Field
            label="Username"
            invalid={!!errors.Username}
            errorText={errors.Username?.message}
          >
            <Input
              size={"xl"}
              {...register("Username", { required: "Username is required" })}
            />
          </Field>
          <Field
            label="Password"
            invalid={!!errors.Password}
            errorText={errors.Password?.message}
          >
            <PasswordInput
              size={"xl"}
              {...register("Password", { required: "Password is required" })}
            />
          </Field>
        </Box>
        <Box my={5}>
          <Flex justify="space-between" alignItems={"center"}>
            <Checkbox {...register("keepLogged")}>Remember me</Checkbox>
            <Link
              variant="underline"
              fontSize={14}
              fontWeight={600}
              href="/forgot-password"
            >
              Forgot Password
            </Link>
          </Flex>
          <Box textAlign={"start"} my={10}>
            <Button
              type="submit"
              loading={isSubmitting}
              w={"full"}
              loadingText="Submitting..."
            >
              Submit
            </Button>

            {hasError && (
              <Alert
                my={5}
                icon={<BiError />}
                status="warning"
                title={errorMessage}
              />
            )}
          </Box>
          <Box textAlign={"center"}>
            <Heading size="2xl">OR</Heading>
            <Link
              mt={6}
              variant="underline"
              fontSize={24}
              fontWeight={600}
              href="/sign-up"
            >
              Create Account
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

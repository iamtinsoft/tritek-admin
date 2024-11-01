"use client";

import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";

import { Alert } from "../../components/ui/alert";

import { BiError } from "react-icons/bi";

import { useState } from "react";

import { CreateUserAccount } from "./services/authService";
import Notiflix from "notiflix";

interface FormValues {
  Firstname: string;
  Lastname: string;
  Username: string;
  Email: string;
  Password: string;
  // ConfrimPassword: string;
}

export const SignUp = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const res: any = await CreateUserAccount(data);
    if (!res.error) {
      reset();
      Notiflix.Report.success(
        "Success",
        "Your Account has been created successfully, kindly login to access your Account",
        "Okay"
      );
    } else {
      setErrorMessage(res.error);
      setHasError(true);
    }
  });

  return (
    <Box as={Flex} alignItems={"center"} h={"100%"} w={"100%"}>
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <Stack gap="4" align="flex-start" maxW="full">
          <Heading size="4xl">Admin Create Account</Heading>
          <Text>Please enter your correct details</Text>
          <Field
            label="Firstname"
            invalid={!!errors.Firstname}
            errorText={errors.Firstname?.message}
          >
            <Input
              size={"xl"}
              {...register("Firstname", { required: "Firstname is required" })}
            />
          </Field>
          <Field
            label="Lastname"
            invalid={!!errors.Lastname}
            errorText={errors.Lastname?.message}
          >
            <Input
              size={"xl"}
              {...register("Lastname", { required: "Lastname is required" })}
            />
          </Field>
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
            label="Email Address"
            invalid={!!errors.Email}
            errorText={errors.Email?.message}
          >
            <Input
              size={"xl"}
              {...register("Email", { required: "Email is required" })}
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
        </Stack>
        <Box my={5}>
          <Box textAlign={"start"} my={10}>
            <Button
              loading={isSubmitting}
              loadingText="Submitting..."
              size={"lg"}
              w={"full"}
              type="submit"
            >
              Create Account
            </Button>
            {/* <Box mt={3} textAlign={"center"}>
            <Heading size="2xl">OR</Heading>
            <Link
              mt={6}
              variant="underline"
              fontSize={24}
              fontWeight={600}
              href="/"
            >
              Login
            </Link>
          </Box> */}
            {hasError && (
              <Alert
                my={5}
                icon={<BiError />}
                status="warning"
                title={errorMessage}
              />
            )}
          </Box>
        </Box>
      </form>
    </Box>
  );
};

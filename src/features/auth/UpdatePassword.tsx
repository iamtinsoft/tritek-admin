"use client";

import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";

import { Alert } from "../../components/ui/alert";

import { BiError } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { UpdateUserPassword } from "./services/authService";
import Notiflix from "notiflix";

interface FormValues {
  Password: string;
  ConfirmPassword: string;
  keepLogged: boolean;
}

export const UpdatePassword = () => {
  const { key: passedEmail } = useParams();
  const email = atob(passedEmail ? passedEmail : "");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const obj = {
      Email: email,
      Password: data.Password,
    };
    const res: any = await UpdateUserPassword(obj);
    if (!res.error) {
      reset();
      Notiflix.Report.success(
        "Success",
        "Your Account Password has been updated successfully, kindly login to access your Account",
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
          <Heading size="4xl">Update Password</Heading>
          <Text>Please enter your login details</Text>

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
          <Field
            label="Confirm Password"
            invalid={!!errors.ConfirmPassword}
            errorText={errors.ConfirmPassword?.message}
          >
            <PasswordInput
              size={"xl"}
              {...register("ConfirmPassword", {
                required: "Confirm Password is required",
              })}
            />
          </Field>
        </Stack>
        <Box my={5}>
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
      </form>
    </Box>
  );
};

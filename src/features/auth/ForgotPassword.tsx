"use client";

import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { Field } from "../../components/ui/field";

import { Alert } from "../../components/ui/alert";

import { BiError } from "react-icons/bi";

import { useState } from "react";

import Notiflix from "notiflix";
import { ValidateUser } from "./services/authService";

interface FormValues {
  Email: string;
}

export const ForgotPassword = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const res: any = await ValidateUser(data);
    if (!res.error) {
      reset();
      Notiflix.Report.success(
        "Success",
        "A Password reset link has been sent to your email",
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
          <Heading size="4xl">Forgot Password</Heading>
          <Text>Please enter your email address</Text>
          <Field
            label="Email"
            invalid={!!errors.Email}
            errorText={errors.Email?.message}
          >
            <Input
              size={"xl"}
              {...register("Email", { required: "Email is required" })}
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
              Reset
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
        </Box>
      </form>
    </Box>
  );
};

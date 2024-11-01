import { Grid, GridItem } from "@chakra-ui/react";
import { greyColor } from "../config";

const AuthLayout = ({ content, children }: any) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="1">
      <GridItem colSpan={3} p={0}>
        {content}
      </GridItem>
      <GridItem colSpan={2} bg={greyColor} p={10} h={"100vh"}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default AuthLayout;

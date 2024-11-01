import { Grid, GridItem } from "@chakra-ui/react";

import NavigationBar from "../components/navbar/NavigationBar";
import { lightColor } from "../config";

const DashboardLayout = ({ content, children }: any) => {
  return (
    <Grid templateColumns="repeat(7, 1fr)" w={"full"} gap="6">
      <GridItem colSpan={1} p={0}>
        {content}
      </GridItem>
      <GridItem colSpan={6} bg={lightColor} p={0} h={"100vh"}>
        <NavigationBar />
        {children}
      </GridItem>
    </Grid>
  );
};

export default DashboardLayout;

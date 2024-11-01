import { Box, Heading, VStack, Link } from "@chakra-ui/react";

const AdminSidebar = () => {
  const sidebarLinks: any = [
    "Dashboard",
    "Monitoring",
    "Incident-Management",
    "Analytics",
    "File-Manager",
    "Settings",
  ];
  return (
    <Box p={3}>
      <Heading size="3xl" textAlign={"left"}>
        DP Protect
      </Heading>
      <VStack gapY={5} align={"flex-start"} my={10}>
        {sidebarLinks.map((d: string, i: number) => (
          <Link fontSize={"lg"} key={i} href={d}>
            {d}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default AdminSidebar;

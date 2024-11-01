import { Box } from "@chakra-ui/react";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminSidebar from "../components/sidebar/AdminSidebar";

const AdminDashboardPage = () => {
  return (
    <DashboardLayout content={<AdminSidebar />}>
      <Box p={6}>hsdghghdfgh</Box>
    </DashboardLayout>
  );
};

export default AdminDashboardPage;

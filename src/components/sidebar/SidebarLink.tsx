import { Link } from "@chakra-ui/react/link";

import LucideDynamicIcon from "./lucide-dynamic-icons";
import { Button } from "@chakra-ui/react";

const SidebarLink = ({ title, icon, url }: any) => {
  return (
    <Button
      as={Link}
      className="w-full justify-start mb-2"
      color="default"
      href={url}
      radius="sm"
      size="lg"
      // startContent={<LucideDynamicIcon color={"black"} name={icon} size={20} />}
      style={{ fontWeight: 500 }}
    >
      <LucideDynamicIcon color={"black"} name={icon} size={20} />
      {title}
    </Button>
  );
};

export default SidebarLink;

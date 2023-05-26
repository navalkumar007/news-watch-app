import { Outlet } from "react-router-dom";
import Navbar from ".././components/Navbar";
import { Box } from "@chakra-ui/react";

export default function Layout() {
  return (
    <Box
      sx={{
        "body::-webkit-scrollbar-thumb": {
          display: "none",
        },
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
}

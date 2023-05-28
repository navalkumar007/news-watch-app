import { Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import Navbar from ".././components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <Box
      overflowX={'hidden'}
      sx={{
        "body::-webkit-scrollbar-thumb": {
          display: "none"
        },
      }}
    >
      <Navbar />
      <Outlet />
      <ScrollToTop />
    </Box>
  );
}

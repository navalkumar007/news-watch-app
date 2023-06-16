import { Outlet } from "react-router-dom";

import { Box, useColorModeValue } from "@chakra-ui/react";

import Navbar from ".././components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <Box
      bgColor={useColorModeValue("white", "rgba(116, 110, 201, 0.7)")}
      overflowX={"hidden"}
      sx={{
        "body::-webkit-scrollbar-thumb": {
          display: "none",
        },
      }}
    >
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </Box>
  );
}

import { Flex, Box, Spacer } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex bg="black">
      <Box w="70px" h="10" bg="red.500" />
      <Spacer />
      <Box w="70px" h="10" bg="red.500" />
      <Spacer />
      <Box w="70px" h="10" bg="red.500" />
    </Flex>
  );
}

import React from "react";
import { Flex, Spacer, Center, Text, Square, Box } from "@chakra-ui/react";
import "./App.scss";

function App() {
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

export default App;

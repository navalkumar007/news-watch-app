import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "darkThemeColor.900")}
        px={4}
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Flex h={"70px"} alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            <Text as="span" pr={"0.25rem"} textStyle="logoLeft">
              NASK
            </Text>
            <Text as="span" textStyle="logoRight">
              Tech
            </Text>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

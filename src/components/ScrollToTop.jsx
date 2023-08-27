import React, { useEffect, useState } from "react";

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button, useColorModeValue } from "@chakra-ui/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right={["16px", "40px"]}
          zIndex={3}
          boxShadow={
            "inset -20px 0 80px #ffffff28, inset -20px 0 300px #ffffff,0 0 10px #fff,-10px 0 80px #f0f,10px 0 80px #0ff;"
          }
          borderRadius={"10px"}
        >
          <Button
            size={"md"}
            rightIcon={<ArrowUpIcon boxSize={5} p={"0"} />}
            color={useColorModeValue("black", "white")}
            bgColor={useColorModeValue(
              "linear-gradient(rgba(248, 247, 216, 0.6),rgba(248, 247, 216, 0.6))",
              "darkThemeColor.900"
            )}
            _hover={{ color: useColorModeValue("blackAlpha.800", "white") }}
            variant="solid"
          >
            Top
          </Button>
        </Box>
      )}
    </>
  );
}

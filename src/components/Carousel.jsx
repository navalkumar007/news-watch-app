import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Badge,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  // fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ cards, headline }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "20%", md: "70px" });

  return (
    <Flex
      h={{ base: "80vh", md: "100vh" }}
      flexDir="column"
      justifyContent={"space-evenly"}
    >
      <Box w="100%">
        <Center fontWeight="bold" fontSize={22} letterSpacing="1px">
          {headline}
        </Center>
      </Box>
      <Box
        h="88%"
        ml="auto"
        mr="auto"
        mt="-1"
        width="95%"
        bg={useColorModeValue("white", "black")}
        p="1rem"
        rounded="full"
        borderColor={useColorModeValue("gray.100", "white")}
        borderRadius="lg"
        borderWidth="2px"
      >
        <Box
          position={"relative"}
          height={"100%"}
          width={"full"}
          overflow={"hidden"}
          backgroundColor="transparent"
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="solid"
            position="absolute"
            color={useColorModeValue("darkThemeColor", "white")}
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
            py={"6"}
          >
            <BiLeftArrowAlt size="55px" />
          </IconButton>

          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="solid"
            color={useColorModeValue("darkThemeColor", "white")}
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
            py={"6"}
          >
            <BiRightArrowAlt size="55px" />
          </IconButton>

          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
              <Box
                key={index}
                height={"100%"}
                position="relative"
                backgroundPosition={{ base: "top", lg: "center" }}
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                backgroundImage={`url(${card.imageSrc})`}
                border="0"
                outline={"none"}
              >
                <Container w="100%" h="100%">
                  <Container
                    size="container.lg"
                    height="80vh"
                    position="relative"
                    p="0"
                  >
                    <Link
                      href={card.link}
                      style={{
                        textDecoration: "none",
                        outline: "none",
                        border: "0",
                      }}
                      isExternal
                    >
                      <Stack
                        spacing={4}
                        position="absolute"
                        top={{ base: "50%", md: "60%" }}
                        transform="translate(0, -50%)"
                        alignItems={"center"}
                        p="1rem"
                        backgroundColor="whiteAlpha.700"
                        rounded={"lg"}
                      >
                        <Box
                          bg={useColorModeValue("#e6e8ee", "blackAlpha.700")}
                          rounded={"lg"}
                          px="0.5rem"
                        >
                          <Text
                            fontSize={{ base: "sm", md: "md", lg: "lg" }}
                            color={useColorModeValue("black", "white")}
                            fontWeight="semibold"
                            align="center"
                          >
                            {card.text}
                          </Text>
                        </Box>
                        <Center>
                          <Badge
                            borderRadius="full"
                            mt="1rem"
                            px="2"
                            py="1"
                            bg={useColorModeValue("gray.300", "blackAlpha.700")}
                            color={useColorModeValue("gray.800", "white")}
                            ml="0.25em"
                            fontStyle="italic"
                            fontSize={{ base: "xs" }}
                          >
                            {card.badgeText}
                          </Badge>
                        </Center>
                      </Stack>
                    </Link>
                  </Container>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Flex>
  );
}

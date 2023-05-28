import React, { useRef } from "react";

import { useInViewport } from "react-in-viewport";
import {
  Flex,
  Box,
  Center,
  Image,
  useColorModeValue,
  ScaleFade,
  Link,
  Badge,
} from "@chakra-ui/react";

import * as Constants from "../constants/constants";

export const Card = ({
  height,
  imgSrc,
  alt,
  fallbackSrc,
  CardTitle,
  CardSubtitle,
  BadgeText,
  articleLink,
}) => {
  const ref = useRef(null);

  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "200px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Box width={"100%"}>
      <ScaleFade
        initialScale={0.9}
        in={enterCount > 0}
        whileHover={{ scale: 1.1 }}
      >
        <Box
          ref={ref}
          h="100%"
          w={{ base: "90%", md: "85%" }}
          marginLeft="auto"
          marginRight="auto"
          mt={{ base: "1rem", md: "0rem" }}
          transform={{ base: "none" }}
          backgroundSize={'cover'}
          bgImage={useColorModeValue("linear-gradient(rgba(248, 247, 216, 0.6),rgba(248, 247, 216, 0.6)), " + Constants.NEWS_BACKGROUNDIMG_URL,
            "linear-gradient(rgba(97, 96, 216, 0.6),rgba(248, 247, 216, 0.6)) , " + Constants.NEWS_BACKGROUNDIMG_URL)}
          borderColor={useColorModeValue("gray.100", "white")}
          borderRadius="lg"
          borderWidth="1px"
          cursor="pointer"
        >
          <Link
            href={articleLink}
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Center
              fontWeight="bold"
              fontSize={20}
              letterSpacing="1px"
              py="0.5rem"
              color={useColorModeValue("black", "darkThemeColor.900")}
            >
              {CardTitle}
            </Center>
            <Flex justifyContent="center" bg="black" rounded="md" mx="1.25rem">
              <Image
                src={imgSrc}
                alt={alt}
                maxW="100%"
                maxH={height}
                h={height}
                fallbackSrc={fallbackSrc}
                objectFit="contain"
                loading="lazy"
              />
            </Flex>
            <Box p={6} textAlign='center' mx={'2rem'}>
              <Center
                fontWeight="semibold"
                fontSize={{ base: 12, md: 15 }}
                letterSpacing="0.5px"
                rounded={'md'}
                bg={useColorModeValue("transparent", "linear-gradient(rgba(21, 2, 58, 0.9),rgba(97, 96, 216, 0.9))")}
                py="5px"
                px="1rem"
              >
                {CardSubtitle}
              </Center>
              <Center>
                <Badge
                  borderRadius="full"
                  border={'1px'}
                  mt="1rem"
                  px="2"
                  py="0.5rem"
                  bg={useColorModeValue("gray.100", "gray.200")}
                  color="red.500"
                  ml="0.25em"
                  style={{ fontStyle: "italic" }}
                >
                  {BadgeText}
                </Badge>
              </Center>
            </Box>
          </Link>
        </Box>
      </ScaleFade>
    </Box>
  );
};

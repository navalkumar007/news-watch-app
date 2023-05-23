import React, { useRef } from 'react';

import { useInViewport } from "react-in-viewport";
import { Flex, Box, Center, Image, Text, useColorModeValue, ScaleFade, Link, Badge } from "@chakra-ui/react";

export const Card = ({ height, imgSrc, alt, fallbackSrc, CardTitle, CardSubtitle, BadgeText, articleLink }) => {
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
                <Box ref={ref} h="100%" w={{ base: "90%", md: "85%" }} marginLeft="auto" marginRight="auto"
                    mt={{ base: '1rem', md: '0rem' }}
                    transform={{ base: 'none' }}
                    borderColor={useColorModeValue("gray.300", "white")}
                    borderRadius="lg"
                    borderWidth="1px"
                    cursor="pointer">
                    <Link href={articleLink} style={{ textDecoration: 'none' }} isExternal>
                        <Center fontWeight='bold' fontSize={20} letterSpacing="1px" py='0.5'>{CardTitle}</Center>
                        <Flex justifyContent="center" bg='black' rounded='md' mx='0.5rem'>
                            <Image src={imgSrc} alt={alt} maxW="100%" maxH={height} h={height} fallbackSrc={fallbackSrc} objectFit="contain" loading='lazy' />
                        </Flex>
                        <Box p={6}>
                            <Center fontWeight="semibold" fontSize={16} letterSpacing="0.5px" pb="20px">
                                {CardSubtitle}
                            </Center>
                            <Center>
                                <Badge borderRadius='full' mt="1rem" px='2' py='1' bg={useColorModeValue("gray.300", "gray.200")} color='gray.600' ml="0.25em" style={{ fontStyle: 'italic' }}>
                                    {BadgeText}
                                </Badge>
                            </Center>
                        </Box>
                    </Link>
                </Box>
            </ScaleFade>
        </Box>
    )
}

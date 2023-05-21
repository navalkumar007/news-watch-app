import React from 'react'
import { useInViewport } from "react-in-viewport";
import { Flex, Box, Spacer, Center, Image } from "@chakra-ui/react";

export const TopHeadlines = (props) => {
    const height = '300';
    const fallbackSrc = 'https://via.placeholder.com/300';
    const contentMl = '2rem';
    const contentMr = '0.5rem';
    const contentMl2 = '0.5rem';
    const contentMr2 = '2rem';
    const contentMx = '0.5rem';

    return (
        <>
            <Box h="100%" w="100%" mt={props.mt}>
                <Center fontWeight='semibold' fontSize='xl'>{props.headline}</Center>
                <Box bg="green" h='100%'></Box>
            </Box>
            <Flex mb="0.5rem" flexDir={{ base: "column", md: "row" }}>
                <Box h="100%" w={{ md: "50%" }} ml={{ base: contentMx, md: contentMl }} mr={{ base: contentMx, md: contentMr }}>
                    <Center fontWeight='semibold' fontSize='xl'>Featured</Center>
                    <Flex justifyContent="center" bg='black' rounded='md'>
                        <Image src='' alt='' maxW="100%" maxH={height} h={height} fallbackSrc={fallbackSrc} objectFit="contain"/>
                    </Flex>
                </Box>
                <Spacer />
                <Box h="100%" w={{ md: "50%" }} ml={{ base: contentMx, md: contentMl2 }} mr={{ base: contentMx, md: contentMr2 }}>
                    <Center fontWeight='semibold' fontSize='xl'>Top</Center>
                    <Flex justifyContent="center" bg='black' rounded='md'>
                        <Image src='https://www.fijivillage.com/news_images/1860223836645ea69772ff6b2de451.jpg' alt='' maxW="100%" maxH={height} h={height} fallbackSrc={fallbackSrc} objectFit="contain" />
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

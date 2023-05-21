import React from 'react'

import { Flex, Box, Center } from "@chakra-ui/react";

import Carousel from './Carousel';

export const OtherNews = (props) => {
    return (
        <>
            <Flex h="100vh" flexDir="column" justifyContent={'center'} >
                <Box w="100%" pb="1.5rem">
                    <Center fontWeight='semibold' fontSize='xl'>{props.headline}</Center>
                </Box>
                <Box h="85%" ml="auto" mr="auto" width="95%">
                    <Carousel />
                </Box>
            </Flex>
        </>
    )
}

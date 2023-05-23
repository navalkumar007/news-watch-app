import React from 'react'

import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";

import Carousel from './Carousel';
import { CleanImgSrcLink, CapitalizeFirstLetter } from '../helpers/functions';

export const OtherLocalNews = (props) => {
    const OtherLocalNews = props.otherLocalNews;
    console.log(OtherLocalNews);

    const newArrOfObj = OtherLocalNews.map(item => {
        return {
            title: '',
            text: CapitalizeFirstLetter(item.otherArticleTitle),
            imageSrc: CleanImgSrcLink(item.otherArticleImgSrc),
            link: item.otherArticleLink,
            badgeText: item.otherArticleTime,
        };
    });

    return (
        <>
            <Flex h={{ base: "80vh", md: "100vh" }} flexDir="column" justifyContent={'space-evenly'}>
                <Box w="100%">
                    <Center fontWeight='bold' fontSize={22} letterSpacing="1px">{props.headline}</Center>
                </Box>
                <Box h="85%" ml="auto" mr="auto" mt='-1' width="95%" bg={useColorModeValue("gray.200", "black")} p='1rem' rounded='full' borderColor={useColorModeValue("gray.300", "white")} borderRadius="lg"
                    borderWidth="1px">
                    <Carousel cards={newArrOfObj} />
                </Box>
            </Flex>
        </>
    )
}

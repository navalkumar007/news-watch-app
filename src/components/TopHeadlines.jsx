import React from 'react'
import { Flex, Box, Center } from "@chakra-ui/react";

import { Card } from './Card';
import { CleanImgSrcLink, CapitalizeFirstLetter } from '../helpers/functions';

export const TopHeadlines = (props) => {
    const height = '320';
    const fallbackSrc = 'https://via.placeholder.com/300';
    const fallbackSrc2 = 'https://via.placeholder.com/500';
    const news = props.featured;
    const featuredImgSrc = CleanImgSrcLink(news.featuredImgSrc);
    const topNewsImgSrc = CleanImgSrcLink(news.topNewsImgSrc);
    const featuredArticleTitle = CapitalizeFirstLetter(news.featuredTitle);
    const topNewsArticleTitle = CapitalizeFirstLetter(news.topNewsTitle);

    return (
        <>
            <Box h="100%" w="100%" mt={props.mt} mb={{ base: props.baseMb, md: props.mdMb }}>
                <Center fontWeight='bold' fontSize={22}>{props.headline}</Center>
            </Box>
            <Flex mb="0.5rem" flexDir={{ base: "column", md: "row" }}>
                <Card height={height} imgSrc={featuredImgSrc} fallbackSrc={fallbackSrc} alt='' CardTitle='Featured' CardSubtitle={featuredArticleTitle}  BadgeText={news.featuredArticleTime} articleLink={news.featuredLink}/>
                <Card height={height} imgSrc={topNewsImgSrc} fallbackSrc={fallbackSrc2} alt='' CardTitle='Top' CardSubtitle={topNewsArticleTitle}  BadgeText={news.topNewsArticleTime} articleLink={news.topNewsLink} />
            </Flex>
        </>
    )
}

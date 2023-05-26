import React from "react";

import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";

import Carousel from "./Carousel";
import { CleanImgSrcLink, CapitalizeFirstLetter } from "../helpers/functions";

export const OtherLocalNews = (props) => {
  const OtherLocalNews = props.otherLocalNews;
  console.log(OtherLocalNews);

  const newArrOfObj = OtherLocalNews.map((item) => {
    return {
      title: "",
      text: CapitalizeFirstLetter(item.otherArticleTitle),
      imageSrc: CleanImgSrcLink(item.otherArticleImgSrc),
      link: item.otherArticleLink,
      badgeText: item.otherArticleTime,
    };
  });

  return (
    <>
      <Carousel cards={newArrOfObj} headline={props.headline} />
    </>
  );
};

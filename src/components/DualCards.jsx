import React from "react";
import { Flex, Box, Center, useColorModeValue, Tag } from "@chakra-ui/react";

import { Card } from "./Card";
import { CleanImgSrcLink, CapitalizeFirstLetter } from "../helpers/functions";

export const DualCardSection = (props) => {
  const height = "320";
  const fallbackSrc = "https://via.placeholder.com/300";
  const fallbackSrc2 = "https://via.placeholder.com/500";
  const LeftCardImgSrc = CleanImgSrcLink(props.leftCardImgSrc);
  const RightCardImgSrc = CleanImgSrcLink(props.rightCardImgSrc);
  const LeftCardTitle = CapitalizeFirstLetter(props.leftCardTitle);
  const RightCardTitle = CapitalizeFirstLetter(props.rightCardTitle);
  const LeftBadgeText = props.leftBadgeText;
  const RightBadgeText = props.rightBadgeText;
  const LeftCardLink = props.leftCardLink;
  const RightCardLink = props.rightCardLink;

  return (
    <>
      <Box
        h="100%"
        w="100%"
        mt={props.mt}
        mb={{ base: props.baseMb, md: props.mdMb }}
      >
        <Center fontWeight="bold" fontSize={22}>
          <Tag
            size={"2xl"}
            p={"2"}
            rounded={"full"}
            bg={useColorModeValue("white", "darkThemeColor.900")}
          >
            {props.headline}
          </Tag>
        </Center>
      </Box>
      <Flex mb="0.5rem" flexDir={{ base: "column", md: "row" }}>
        <Card
          height={height}
          imgSrc={LeftCardImgSrc}
          fallbackSrc={fallbackSrc}
          alt=""
          CardTitle="Featured"
          CardSubtitle={LeftCardTitle}
          BadgeText={LeftBadgeText}
          articleLink={LeftCardLink}
        />
        <Card
          height={height}
          imgSrc={RightCardImgSrc}
          fallbackSrc={fallbackSrc2}
          alt=""
          CardTitle="Top"
          CardSubtitle={RightCardTitle}
          BadgeText={RightBadgeText}
          articleLink={RightCardLink}
        />
      </Flex>
    </>
  );
};

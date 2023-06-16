import React, { useRef, useState, useEffect } from "react";

import {
  Box,
  useColorModeValue,
  Center,
  Badge,
  Button,
  Skeleton,
  Spinner,
  useToast,
  Spacer,
} from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

import "../index.scss";

import { CleanImgSrcLink, CapitalizeFirstLetter } from "../helpers/functions";
import * as Constants from "../constants/constants";
import { Countdown } from "../components/Countdown";
import { DualCardSection } from "../components/DualCards";
import Carousel from "./../components/Carousel";
import NewsDataService from "../services/NewsService";

export default function Home() {
  const toast = useToast();
  const childRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [localFeatured, setLocalFeatured] = useState([]);
  const [BusinessFeatured, setBusinessFeatured] = useState({});
  const [BusinessTop, setBusinessTop] = useState([]);
  const [OtherNewsLocal, setOtherNewsLocal] = useState({});
  const [OtherNewsBusiness, setOtherNewsBusiness] = useState({});

  const handleClick = () => {
    childRef.current.handleReset();
  };

  const showToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      duration: 2000,
      isClosable: false,
      status: status,
      position: "top-right",
    });
  };

  const fetchData = () => {
    setIsLoading(true);

    NewsDataService.getNews()
      .then((response) => {
        //Load the api data
        setApiData(response.data);
      })
      .catch((e) => {
        showToast(
          "Error",
          "Something went wrong. Please check if the original website is still running",
          "error"
        );
        console.log(e);
      });
  };

  useEffect(() => {
    //Call API to fetch data
    return () => fetchData();
  }, []);

  useEffect(() => {
    if (apiData.length !== 0) {
      //Set the values
      setLocalFeatured(apiData[0].featured);
      setBusinessFeatured(apiData[0].business.featBusinessArticle);
      setBusinessTop(apiData[0].business.topBusinessArticle);

      const otherLocalNews = apiData[0].others.map((item) => {
        return {
          title: "",
          text: CapitalizeFirstLetter(item.otherArticleTitle),
          imageSrc: CleanImgSrcLink(item.otherArticleImgSrc),
          link: item.otherArticleLink,
          badgeText: item.otherArticleTime,
        };
      });

      setOtherNewsLocal(otherLocalNews);

      const otherBusinessNews = apiData[0].otherBusiness.map((item) => {
        return {
          title: item.title,
          text: CapitalizeFirstLetter(item.title),
          imageSrc: CleanImgSrcLink(item.imgSrc),
          link: item.link,
          badgeText: item.timeLeft,
        };
      });

      setOtherNewsBusiness(otherBusinessNews);

      showToast("Loaded.", "News data updated!", "success");
      setIsLoading(false);
    }
  }, [apiData]);

  return (
    <>
      <Box
        position="relative"
        backgroundSize={"contain"}
        bgImage={Constants.HEX_BG_URL}
      >
        <Center
          h="50px"
          color={useColorModeValue("black", "white")}
          fontWeight="semibold"
          fontSize="md"
        >
          Auto-refreshing in....
          <Badge
            borderRadius="full"
            px="2"
            py="1"
            bg={useColorModeValue("whiteAlpha.500", "gray.200")}
            color="red.500"
            ml="0.25em"
          >
            <Countdown ref={childRef} fetchData={fetchData} />
          </Badge>
        </Center>

        <Center h="50px" color={useColorModeValue("black", "white")}>
          {isLoading == true ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal"
              size="xl"
            />
          ) : (
            <Button
              rightIcon={<RepeatClockIcon boxSize={5} p={"0"} />}
              color={"white"}
              onClick={handleClick}
              boxShadow={
                "inset -20px 0 25px #ffffff28, inset -20px 0 300px #319795,0 0 10px #fff,-10px 0 25px #f5d3f5,10px 0 25px #0ff;"
              }
              borderRadius={"10px"}
            >
              Refresh Now
            </Button>
          )}
        </Center>

        {isLoading == true ? (
          <Skeleton height="100vh" mt="1rem" />
        ) : (
          <>
            <DualCardSection
              mt="0.75rem"
              baseMb="0rem"
              mdMb="1.25rem"
              headline="Local News"
              leftCardImgSrc={localFeatured.featuredImgSrc}
              rightCardImgSrc={localFeatured.topNewsImgSrc}
              leftCardTitle={localFeatured.featuredTitle}
              rightCardTitle={localFeatured.topNewsTitle}
              leftBadgeText={localFeatured.featuredArticleTime}
              rightBadgeText={localFeatured.topNewsArticleTime}
              leftCardLink={localFeatured.featuredLink}
              rightCardLink={localFeatured.topNewsLink}
            />

            <Spacer />

            <Carousel cards={OtherNewsLocal} headline="Other Local News" />

            <Spacer />

            <DualCardSection
              mt="0.5rem"
              baseMb="0rem"
              mdMb="1.5rem"
              headline="Business News"
              leftCardImgSrc={BusinessFeatured.articleImgSrc}
              rightCardImgSrc={BusinessTop.articleImgSrc}
              leftCardTitle={BusinessFeatured.articleTitle}
              rightCardTitle={BusinessTop.articleTitle}
              leftBadgeText={BusinessFeatured.articleTime}
              rightBadgeText={BusinessTop.articleTime}
              leftCardLink={BusinessFeatured.articleLink}
              rightCardLink={BusinessTop.articleTime}
            />

            <Spacer />

            <Carousel
              cards={OtherNewsBusiness}
              headline="Other Business News"
            />
          </>
        )}
      </Box>
    </>
  );
}

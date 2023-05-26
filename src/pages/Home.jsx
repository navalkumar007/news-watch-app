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
  useColorMode,
} from "@chakra-ui/react";

import { Countdown } from "../components/Countdown";
import { TopHeadlines } from "../components/TopHeadlines";
import { OtherLocalNews } from "../components/OtherLocalNews";
import NewsDataService from "../services/NewsService";

import "../index.scss";

export default function Home() {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const childRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
        showToast("Loaded.", "News data updated!", "success");
        // console.log(response.data);
      })
      .catch((e) => {
        //Log the error
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
      return () => setIsLoading(false);
    }
  }, [apiData]);

  return (
    <>
      <Box
        minHeight="100vh"
        bg={useColorModeValue("blackAlpha.100", "gray.900")}
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
            <Button colorScheme="teal" variant="solid" onClick={handleClick}>
              Refresh Now
            </Button>
          )}
        </Center>

        {isLoading == true ? (
          <Skeleton height="100vh" mt="1rem" />
        ) : (
          <>
            <TopHeadlines
              mt="0.5rem"
              baseMb="0rem"
              mdMb="1.5rem"
              headline="Local News"
              featured={apiData[0].featured}
            />
            <OtherLocalNews
              headline="Other Local News"
              otherLocalNews={apiData[0].others}
            />
            {/* 
              <TopHeadlines mt='0' headline='Business News' />
              <OtherNews headline='Other Business News' /> */}
          </>
        )}
      </Box>
    </>
  );
}

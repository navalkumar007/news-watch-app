<br/>
<p align="center">
  <a href="https://github.com/navalkumar007/news-watch-app">
    <img src="https://i.postimg.cc/NG4NLKbh/news192.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">News Watch App</h3>

  <p align="center">
    Front-End for News Scraper API
    <br/>
    <br/>
  </p>
</p>

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Authors](#authors)

## About The Project

![Screen Shot](https://i.postimg.cc/J47HZtZS/Screenshot.png)


## Built With

• React
• ChakraUI
• ViteJs

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm

```sh
npm install npm@latest -g
```

* news scraper api access or placeholder provided

> [!IMPORTANT]  
> The project pulls news articles from the news scraper api and displays it to the frontend.
> If I didn't release the api code along with this frontend code; you may modify "Home.jsx" file with the placeholder code below.

```markdown
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
  // const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [OtherNewsLocal, setOtherNewsLocal] = useState({});

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

  useEffect(() => {
    const otherLocalNews = [
      {
        title: "",
        text: "Labore ipsum deserunt eu Lorem commodo culpa et ex amet non. Nulla ea in ullamco occaecat labore. Enim est reprehenderit nostrud Lorem. In eu sint esse excepteur do eiusmod. Ex sit dolore id eiusmod.",
        imageSrc: "https://placehold.co/1200x675",
        link: "#",
        badgeText: "2 hours",
      },
      {
        title: "",
        text: "Aliqua commodo elit esse ex ad. Pariatur dolore id velit veniam nostrud eiusmod incididunt reprehenderit nisi incididunt fugiat. Mollit aliqua labore aliqua excepteur officia in voluptate incididunt veniam qui incididunt. Amet minim tempor pariatur ex aute commodo magna do commodo elit proident sint. Ex dolore proident eiusmod sit.",
        imageSrc: "https://placehold.co/1200x675",
        link: "#",
        badgeText: "4 hours",
      },
    ];

    setOtherNewsLocal(otherLocalNews);

    showToast("Loaded.", "News data updated!", "success");
    setIsLoading(false);
  }, []);

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
            {/* <Countdown ref={childRef} fetchData={fetchData} /> */}
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
              leftCardImgSrc="https://placehold.co/600x400"
              rightCardImgSrc="https://placehold.co/600x400"
              leftCardTitle="Placeholder"
              rightCardTitle="Placeholder"
              leftBadgeText="2 hours ago"
              rightBadgeText="1 hour ago"
              leftCardLink="#"
              rightCardLink="#"
            />

            <Spacer />

            <Carousel cards={OtherNewsLocal} headline="Other Local News" />
          </>
        )}
      </Box>
    </>
  );
}
```
### Installation

1. Clone the repo

```sh
git clone https://github.com/navalkumar007/news-watch-app.git
```

2. Install NPM packages

```sh
npm install
```

3. Replace Home.jsx code(if api code not provided by me) with placeholder provided


3. Done!

## Authors

* **Naval Kumar** - *Software Engineer* - [Naval Kumar](https://github.com/navalkumar007/) - *All the work*
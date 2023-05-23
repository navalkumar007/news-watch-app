import React from 'react';
import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Badge,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  // fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ cards }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '20%', md: '70px' });
  console.log(cards);
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  // const cards = [
  //   {
  //     title: 'Design Projects 1',
  //     text:
  //       "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  //   },
  //   {
  //     title: 'Design Projects 2',
  //     text:
  //       "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
  //   },
  //   {
  //     title: 'Design Projects 3',
  //     text:
  //       "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  //   },
  // ];


  return (
    <Box
      position={'relative'}
      height={'100%'}
      width={'full'}
      overflow={'hidden'}
      backgroundColor="transparent"
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="solid"
        position="absolute"
        color={useColorModeValue("darkThemeColor", "white")}
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()} py={'6'}
      >
        <BiLeftArrowAlt size="60px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="solid"
        color={useColorModeValue("darkThemeColor", "white")}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        py={'6'}
      >
        <BiRightArrowAlt size="60px"

        />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            // height={'6xl'}
            height={'100%'}
            position="relative"
            backgroundPosition={{ base: "top", lg: 'center' }}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${card.imageSrc})`}
          >
            <Container w="100%" h="100%">
              <Container size="container.lg" height="80vh" position="relative" p='0'>
                <Link href={card.link} style={{ textDecoration: 'none' }} isExternal>
                  <Stack
                    spacing={6}
                    position="absolute"
                    top={{ base: "50%", md: "74%" }}
                    transform="translate(0, -50%)"
                    alignItems={'center'}
                    p="1rem"
                    backgroundColor="whiteAlpha.700"
                    rounded={'lg'}
                  >
                    {/* <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                      {card.title}
                    </Text> */}
                    <Box bg={useColorModeValue("whiteAlpha.500", "blackAlpha.700")} rounded={'lg'} px='0.5rem' >

                      <Text fontSize={{ base: 'md', lg: 'lg' }} color={useColorModeValue("black", "white")} fontWeight='semibold' align='center'>
                        {card.text}
                      </Text>
                    </Box>
                    <Center>
                      <Badge borderRadius='full' mt="1rem" px='2' py='1' bg={useColorModeValue("gray.300", "blackAlpha.700")} color={useColorModeValue("gray.800", "white")} ml="0.25em" fontStyle='italic'>
                        {card.badgeText}
                      </Badge>
                    </Center>
                  </Stack>
                </Link>
              </Container>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
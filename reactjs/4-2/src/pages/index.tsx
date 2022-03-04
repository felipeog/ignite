import type { NextPage } from "next";
import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  Grid,
  Image,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

import { TRAVEL_TYPES, CONTINENT_SLIDES } from "../consts";
import IconWithLabel from "../components/IconWithLabel";
import Carousel from "../components/Carousel";

const Home: NextPage = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 999px)");

  return (
    <>
      <Head>
        <title>worldtrip | Home</title>
      </Head>

      <main>
        <Flex
          as="section"
          height={isSmallScreen ? "160" : "335"}
          bgImage="url(/bg-header.png)"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center center"
        >
          <Grid
            width="100%"
            maxWidth={isSmallScreen ? "340" : "1200"}
            paddingX="6"
            marginX="auto"
            gridTemplateColumns={isSmallScreen ? "auto" : "1fr 1fr"}
            gap="6"
          >
            <Flex direction="column" justify="center">
              <Heading
                color="white"
                fontWeight="500"
                marginBottom="6"
                size={isSmallScreen ? "md" : "xl"}
              >
                5 Continentes, infinitas possibilidades.
              </Heading>

              <Text
                color="white"
                fontWeight="400"
                fontSize={isSmallScreen ? "sm" : "xl"}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>

            {isSmallScreen ? null : (
              <Flex align="center" justify="center" position="relative">
                <Image
                  position="absolute"
                  top="16"
                  right="0"
                  transform="rotate(3deg)"
                  src="/airplane.svg"
                  alt=""
                />
              </Flex>
            )}
          </Grid>
        </Flex>

        <Flex
          as="section"
          width="100%"
          maxWidth={isSmallScreen ? "340" : "1200"}
          paddingX="6"
          marginX="auto"
          marginTop={isSmallScreen ? "4" : "20"}
          marginBottom={isSmallScreen ? "8" : "20"}
          justify={isSmallScreen ? "space-around" : "space-between"}
          wrap="wrap"
        >
          {TRAVEL_TYPES.map(({ imageSrc, label }) => (
            <Box
              key={label}
              marginTop={isSmallScreen ? "4" : "0"}
              marginX={isSmallScreen ? "1" : "0"}
            >
              <IconWithLabel imageSrc={imageSrc} label={label} />
            </Box>
          ))}
        </Flex>

        <Flex
          width={isSmallScreen ? "60px" : "90px"}
          height={isSmallScreen ? "1px" : "2px"}
          marginX="auto"
          backgroundColor="gray.600"
        />

        <Box as="section" marginTop={isSmallScreen ? "8" : "20"}>
          <Heading
            size={isSmallScreen ? "md" : "xl"}
            textAlign="center"
            fontWeight="500"
          >
            Vamos nessa?
          </Heading>
          <Heading
            size={isSmallScreen ? "md" : "xl"}
            textAlign="center"
            fontWeight="500"
            marginTop="4"
            marginBottom={isSmallScreen ? "8" : "20"}
          >
            Então escolha seu continente
          </Heading>

          <Flex width="100%" maxWidth="1200" marginX="auto" marginBottom="10">
            <Carousel slides={CONTINENT_SLIDES} />
          </Flex>
        </Box>
      </main>
    </>
  );
};

export default Home;

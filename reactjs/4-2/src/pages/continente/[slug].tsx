import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Flex, Heading, Grid, Text, useMediaQuery } from "@chakra-ui/react";

import NumberWithLabel from "../../components/NumberWithLabel";
import CountryCard from "../../components/CountryCard";
import { CONTINENTS } from "../../continents";

interface ICity {
  name: string;
  thumbnail: string;
  country: {
    name: string;
    flag: string;
  };
}

interface IContinent {
  name: string;
  image: string;
  description: string;
  countries: number;
  languages: number;
  top100Cities: {
    count: number;
    cities: ICity[];
  };
}

interface IContinentProps {
  continent: IContinent;
}

const Continent = ({ continent }: IContinentProps) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 999px)");
  const sortedCities = [...continent.top100Cities.cities].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <Head>
        <title>worldtrip | {continent.name}</title>
      </Head>

      <main>
        <Flex
          as="section"
          height={isSmallScreen ? "150" : "500"}
          bgImage={`url(${continent.image})`}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center center"
        >
          <Flex
            width="100%"
            maxWidth={isSmallScreen ? "340" : "1200"}
            paddingX="6"
            marginX="auto"
            align={isSmallScreen ? "center" : "auto"}
            justify={isSmallScreen ? "center" : "auto"}
            alignSelf={isSmallScreen ? "auto" : "end"}
            marginBottom={isSmallScreen ? "0" : "14"}
          >
            <Heading
              color="white"
              size={isSmallScreen ? "lg" : "2xl"}
              fontWeight="600"
            >
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <Grid
          as="section"
          width="100%"
          maxWidth={isSmallScreen ? "340" : "1200"}
          paddingX="6"
          marginX="auto"
          gridTemplateColumns={isSmallScreen ? "auto" : "1.2fr 1fr"}
          gap={isSmallScreen ? "6" : "14"}
          marginTop={isSmallScreen ? "6" : "20"}
        >
          <Text
            fontSize={isSmallScreen ? "sm" : "2xl"}
            lineHeight={isSmallScreen ? "6" : "9"}
            textAlign="justify"
          >
            {continent.description}
          </Text>

          <Flex align="center" justify="space-between">
            <NumberWithLabel number={continent.countries} label="países" />
            <NumberWithLabel number={continent.languages} label="línguas" />
            <NumberWithLabel
              number={continent.top100Cities.count}
              label="cidades +100"
              tooltip="Cidades que estão entre as 100 mais visitadas do mundo"
            />
          </Flex>
        </Grid>

        <Flex
          as="section"
          width="100%"
          maxWidth={isSmallScreen ? "340" : "1200"}
          paddingX="6"
          marginX="auto"
          marginTop={isSmallScreen ? "8" : "20"}
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={isSmallScreen ? "24px" : "36px"}
            fontWeight="500"
          >
            Cidades +100
          </Heading>

          <Grid
            marginY="10"
            gridTemplateColumns={isSmallScreen ? "auto" : "repeat(4, 1fr)"}
            gap="10"
          >
            {sortedCities.map((city) => {
              return (
                <CountryCard
                  key={city.name}
                  imageUrl={city.thumbnail}
                  city={city.name}
                  country={city.country.name}
                  flagUrl={city.country.flag}
                />
              );
            })}
          </Grid>
        </Flex>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.keys(CONTINENTS).map((key) => {
    return {
      params: {
        slug: key,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

type TSlug =
  | "africa"
  | "asia"
  | "europa"
  | "america-do-norte"
  | "oceania"
  | "america-do-sul";

export const getStaticProps: GetStaticProps<IContinentProps> = async ({
  params,
}) => {
  const slug = params?.slug as TSlug;

  if (!slug || !CONTINENTS.hasOwnProperty(slug)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      continent: CONTINENTS[slug],
    },
  };
};

export default Continent;

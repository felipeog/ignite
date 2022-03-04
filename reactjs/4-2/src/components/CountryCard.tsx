import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

interface ICountryCardProps {
  imageUrl: string;
  city: string;
  country: string;
  flagUrl: string;
}

const CountryCard = ({
  imageUrl,
  city,
  country,
  flagUrl,
}: ICountryCardProps) => {
  return (
    <Box as="article">
      <Box height="173px">
        <Image
          src={imageUrl}
          alt={city}
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          borderTopRadius="4px"
        />
      </Box>

      <Flex
        borderWidth="1px"
        borderColor="brand.400"
        borderBottomRadius="4px"
        borderTop="none"
        backgroundColor="white"
        padding="6"
        align="center"
        justify="space-between"
      >
        <Box>
          <Heading as="h1" size="md" fontWeight="600">
            {city}
          </Heading>
          <Text color="gray.400" marginTop="3">
            {country}
          </Text>
        </Box>

        <Box
          width="30px"
          height="30px"
          borderRadius="50%"
          flexShrink={0}
          backgroundImage={`url(${flagUrl})`}
          backgroundSize="160%"
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
        />
      </Flex>
    </Box>
  );
};

export default CountryCard;

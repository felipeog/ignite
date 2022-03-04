import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface ICarouselItemProps {
  title: string;
  subtitle: string;
  backgroundUrl: string;
  path: string;
}

const CarouselItem = ({
  title,
  subtitle,
  backgroundUrl,
  path,
}: ICarouselItemProps) => {
  const router = useRouter();
  const [isSmallScreen] = useMediaQuery("(max-width: 999px)");

  return (
    <Flex
      onClick={() => router.push(path)}
      direction="column"
      align="center"
      justify="center"
      height={isSmallScreen ? "250px" : "450px"}
      cursor="pointer"
      backgroundImage={`url(${backgroundUrl})`}
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      transition="200ms"
      position="relative"
      zIndex="10"
      _after={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        inset: 0,
        display: "block",
        backgroundColor: "rgba(0,0,0,.6)",
        transition: "200ms",
      }}
      _hover={{
        _after: {
          backgroundColor: "rgba(0,0,0,.4)",
        },
      }}
    >
      <Heading
        color="white"
        size={isSmallScreen ? "lg" : "2xl"}
        fontWeight="700"
        marginBottom="4"
      >
        {title}
      </Heading>
      <Text
        color="white"
        fontSize={isSmallScreen ? "sm" : "2xl"}
        fontWeight="700"
      >
        {subtitle}
      </Text>
    </Flex>
  );
};

export default CarouselItem;

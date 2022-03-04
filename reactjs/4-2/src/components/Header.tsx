import Link from "next/link";
import { useRouter } from "next/router";
import { Flex, Image, Grid, useMediaQuery } from "@chakra-ui/react";

const Header = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 999px)");
  const router = useRouter();
  const isHomePage = router?.pathname === "/";

  if (isHomePage) {
    return (
      <Flex
        as="header"
        width="100%"
        maxWidth={isSmallScreen ? "340" : "1200"}
        marginX="auto"
        padding={isSmallScreen ? "4" : "6"}
        align="center"
        justify="center"
      >
        <Flex transition="200ms" _hover={{ opacity: ".8" }}>
          <Link href="/">
            <a>
              <Image
                width={isSmallScreen ? "81px" : "auto"}
                src="/logo.svg"
                alt="Worldtrip logo"
              />
            </a>
          </Link>
        </Flex>
      </Flex>
    );
  }

  return (
    <Grid
      as="header"
      width="100%"
      maxWidth={isSmallScreen ? "340" : "1200"}
      marginX="auto"
      padding={isSmallScreen ? "4" : "6"}
      gridTemplateColumns="20px 1fr 20px"
    >
      <Flex align="center" justify="start">
        <Link href="/">
          <a>
            <Image
              src={isSmallScreen ? "/arrow-left-small.svg" : "/arrow-left.svg"}
              alt="Voltar para a Home"
              padding={isSmallScreen ? "4px 12px 4px 0" : "10px 10px 10px 0"}
              transition="200ms"
              cursor="pointer"
              _hover={{ opacity: ".8" }}
            />
          </a>
        </Link>
      </Flex>

      <Flex
        align="center"
        justify="center"
        transition="200ms"
        _hover={{ opacity: ".8" }}
      >
        <Link href="/">
          <a>
            <Image
              width={isSmallScreen ? "81px" : "auto"}
              src="/logo.svg"
              alt="Worldtrip logo"
            />
          </a>
        </Link>
      </Flex>
    </Grid>
  );
};

export default Header;

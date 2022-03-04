import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

interface IIconWithLabelProps {
  imageSrc: string;
  label: string;
}

const IconWithLabel = ({ imageSrc, label }: IIconWithLabelProps) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 999px)");

  if (isSmallScreen) {
    return (
      <Flex align="center">
        <Image src="/dot.svg" alt="" marginRight="3" />

        <Text fontWeight="500" fontSize="lg">
          {label}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="center" minWidth="160px">
      <Image src={imageSrc} alt={label} height="85px" />

      <Text fontWeight="600" fontSize="2xl" marginTop="4">
        {label}
      </Text>
    </Flex>
  );
};

export default IconWithLabel;

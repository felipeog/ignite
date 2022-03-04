import {
  Image,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

interface INumberWithLabelProps {
  number: number;
  label: string;
  tooltip?: string;
}

const NumberWithLabel = ({ number, label, tooltip }: INumberWithLabelProps) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 999px)");

  const renderLabel = () => {
    if (tooltip) {
      return (
        <Flex>
          <Text
            fontWeight={isSmallScreen ? "400" : "600"}
            fontSize={isSmallScreen ? "lg" : "2xl"}
          >
            {label}
          </Text>

          <Popover>
            <PopoverTrigger>
              <Flex
                marginLeft="2"
                transition="200ms"
                cursor="pointer"
                _hover={{ filter: "brightness(.8)" }}
              >
                <Image src="/info.svg" alt="Informação" />
              </Flex>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverArrow />
              <PopoverBody textAlign="center">{tooltip}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      );
    }

    return (
      <Text
        fontWeight={isSmallScreen ? "400" : "600"}
        fontSize={isSmallScreen ? "lg" : "2xl"}
      >
        {label}
      </Text>
    );
  };

  return (
    <Flex direction="column" align={isSmallScreen ? "auto" : "center"}>
      <Text
        paddingRight={tooltip ? "6" : "0"}
        fontWeight="600"
        fontSize={isSmallScreen ? "24px" : "5xl"}
        color="brand.500"
        lineHeight="1.2"
      >
        {number}
      </Text>

      {renderLabel()}
    </Flex>
  );
};

export default NumberWithLabel;

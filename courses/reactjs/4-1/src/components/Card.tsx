import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

interface ICard {
  title: string;
  description: string;
  url: string;
  ts: number;
}

interface ICardProps {
  data: ICard;
  viewImage: (url: string) => void;
}

export function Card({ data, viewImage }: ICardProps): JSX.Element {
  // state
  const [isLoading, setIsLoading] = useState(true);

  // rendering
  return (
    <Box key={data.ts} borderRadius="md" bgColor="pGray.800">
      <Skeleton isLoaded={!isLoading} h={48}>
        <Image
          src={data.url}
          alt={data.title}
          objectFit="cover"
          w="100%"
          h="100%"
          borderTopRadius="md"
          onClick={() => viewImage(data.url)}
          onLoad={() => setIsLoading(false)}
          cursor="pointer"
        />
      </Skeleton>

      <Box pt={5} pb={4} px={6}>
        {isLoading ? (
          <>
            <SkeletonText fontSize="2xl" mt={2} noOfLines={1} />
            <SkeletonText fontSize="md" mt={7} noOfLines={1} />
          </>
        ) : (
          <>
            <Heading fontSize="2xl">{data.title}</Heading>

            <Text mt={2.5} fontSize="md">
              {data.description}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
}

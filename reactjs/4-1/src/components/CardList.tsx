import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface ICard {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface ICardsProps {
  cards: ICard[];
}

export function CardList({ cards }: ICardsProps): JSX.Element {
  // hooks
  const { onOpen, isOpen, onClose } = useDisclosure();

  // state
  const [selectedImage, setSelectedImage] = useState('');

  // functions
  const handleImageView = (imgUrl: string): void => {
    setSelectedImage(imgUrl);
    onOpen();
  };

  // rendering
  if (!cards?.length) {
    return <p>Nenhuma foto encontrada</p>;
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {cards?.map(card => {
          return <Card key={card.id} data={card} viewImage={handleImageView} />;
        })}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImage}
      />
    </>
  );
}

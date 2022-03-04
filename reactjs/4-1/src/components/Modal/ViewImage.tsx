import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface IModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: IModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent
        width="unset"
        maxWidth="900px"
        bgColor="pGray.900"
        overflow="hidden"
      >
        <ModalBody padding="0">
          <Image
            src={imgUrl}
            alt=""
            display="block"
            maxHeight="600px"
            objectFit="contain"
          />
        </ModalBody>

        <ModalFooter justifyContent="start">
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

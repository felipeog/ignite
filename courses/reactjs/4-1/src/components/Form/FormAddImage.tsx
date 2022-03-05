import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { AxiosError } from 'axios';
import { api } from '../../services/api';
import { FileInput } from '../Input/FileInput';
import { TextInput } from '../Input/TextInput';

interface IFormAddImageProps {
  closeModal: () => void;
}

interface IFormData {
  description: string;
  image: FileList;
  title: string;
}

export function FormAddImage({ closeModal }: IFormAddImageProps): JSX.Element {
  // state
  const [imageUrl, setImageUrl] = useState('');
  const [localImageUrl, setLocalImageUrl] = useState('');

  // hooks
  const toast = useToast();
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState, setError, trigger } =
    useForm();
  const mutation = useMutation<Response, AxiosError, IFormData>(
    ({ title, description }) => {
      return api.post('/api/images', {
        url: imageUrl,
        title,
        description,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('images');
      },
    }
  );

  // functions
  const onSubmit = handleSubmit(async (data: IFormData): Promise<void> => {
    try {
      if (!imageUrl) {
        toast({
          title: 'Imagem não adicionada',
          description:
            'É preciso adicionar e aguardar o upload de uma imagem antes de realizar o cadastro.',
        });

        return;
      }

      await mutation.mutateAsync(data);

      toast({
        title: 'Imagem cadastrada',
        description: 'Sua imagem foi cadastrada com sucesso.',
      });
    } catch {
      toast({
        title: 'Falha no cadastro',
        description: 'Ocorreu um erro ao tentar cadastrar a sua imagem.',
      });
    } finally {
      reset();
      setImageUrl('');
      setLocalImageUrl('');
      closeModal();
    }
  });

  // consts
  const { errors } = formState;
  const formValidations = {
    image: {
      required: 'Arquivo obrigatório',
      validate: {
        lessThan10MB: fileList => {
          const sizeInMegabyte = fileList[0].size / 1024 / 1024;

          return sizeInMegabyte < 10 || 'O arquivo deve ser menor que 10MB';
        },
        acceptedFormats: fileList => {
          return (
            !!fileList[0].type.match(/image\/(png|jpeg|gif)/) ||
            'Somente são aceitos arquivos PNG, JPEG e GIF'
          );
        },
      },
    },
    title: {
      required: 'Título obrigatório',
      minLength: { value: 2, message: 'Mínimo de 2 caracteres' },
      maxLength: { value: 20, message: 'Máximo de 20 caracteres' },
    },
    description: {
      required: 'Descrição obrigatória',
      maxLength: { value: 65, message: 'Máximo de 65 caracteres' },
    },
  };

  // rendering
  return (
    <Box as="form" width="100%" onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FileInput
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={setError}
          trigger={trigger}
          error={errors.image}
          {...register('image', formValidations.image)}
        />

        <TextInput
          placeholder="Título da imagem..."
          error={errors.title}
          {...register('title', formValidations.title)}
        />

        <TextInput
          placeholder="Descrição da imagem..."
          error={errors.description}
          {...register('description', formValidations.description)}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
}

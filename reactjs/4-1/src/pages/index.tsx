import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { api } from '../services/api';

function Home(): JSX.Element {
  // hooks
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = null }) => {
      const response = await api.get('/api/images', {
        params: { after: pageParam },
      });

      return response.data;
    },
    {
      getNextPageParam: lastPage => {
        return lastPage?.after;
      },
    }
  );

  const formattedData = useMemo(() => {
    if (data) {
      return data.pages.flatMap(page => {
        return page.data;
      });
    }

    return [];
  }, [data]);

  // rendering
  const renderLoadMoreButton = (): JSX.Element => {
    return (
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        marginTop={10}
      >
        {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
      </Button>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage ? renderLoadMoreButton() : null}
      </Box>
    </>
  );
}

export default Home;

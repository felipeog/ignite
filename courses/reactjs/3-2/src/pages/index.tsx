import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState, useCallback } from 'react';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../services/prismic';
import PostsList from '../components/PostsList';
import LoadMoreButton from '../components/LoadMoreButton';
import ExitPreviewButton from '../components/ExitPreviewButton';
import commonStyles from '../styles/common.module.scss';
import styles from './index.module.scss';

interface IPost {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface IPostPagination {
  next_page: string;
  results: IPost[];
}

interface IHomeProps {
  postsPagination: IPostPagination;
  preview: boolean;
}

export default function Home({
  postsPagination,
  preview,
}: IHomeProps): JSX.Element {
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [results, setResults] = useState(postsPagination.results);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async (): Promise<void> => {
    if (!nextPage) {
      return;
    }

    setLoading(true);

    const postsResponse = await fetch(nextPage);
    const posts = await postsResponse.json();

    setNextPage(posts.next_page);
    setResults(prevResults => {
      return [...prevResults, ...posts.results];
    });
    setLoading(false);
  }, [nextPage]);

  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <div className={`${styles.container} ${commonStyles.widthContainer}`}>
        <PostsList posts={results} />
        <LoadMoreButton
          className={styles.loadMore}
          loading={loading}
          loadMore={loadMore}
          nextPage={nextPage}
        />
      </div>

      {preview ? <ExitPreviewButton /> : null}
    </>
  );
}

export const getStaticProps: GetStaticProps<IHomeProps> = async ({
  preview = false,
  previewData,
}) => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    Prismic.Predicates.at('document.type', 'posts'),
    {
      pageSize: 4,
      orderings: '[document.first_publication_date desc]',
      ref: (previewData as any)?.ref ?? null,
    }
  );

  return {
    props: {
      postsPagination: {
        next_page: postsResponse.next_page,
        results: postsResponse.results,
      },
      preview,
    },
    revalidate: 60 * 60, // 1h
  };
};

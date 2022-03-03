import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Prismic from '@prismicio/client';

import PostHeader from '../../components/PostHeader';
import PostBody from '../../components/PostBody';
import { getPrismicClient } from '../../services/prismic';
import styles from './index.module.scss';

interface IPost {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.loading}>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling</title>
      </Head>

      <PostHeader post={post} />
      <PostBody post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    Prismic.Predicates.at('document.type', 'posts')
  );
  const paths = postsResponse.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const uid = context.params.slug as string;
  const prismic = getPrismicClient();
  const postResponse = await prismic.getByUID('posts', uid, {});

  if (!postResponse) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: postResponse,
    },
    revalidate: process.env.NODE_ENV === 'development' ? 1 : 60 * 60, // 1h
  };
};

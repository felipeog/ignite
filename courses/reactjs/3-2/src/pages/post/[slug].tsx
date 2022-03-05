import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Prismic from '@prismicio/client';

import PostHeader from '../../components/PostHeader';
import PostBody from '../../components/PostBody';
import PostNavigation from '../../components/PostNavigation';
import Comments from '../../components/Comments';
import ExitPreviewButton from '../../components/ExitPreviewButton';
import { getPrismicClient } from '../../services/prismic';
import styles from './index.module.scss';

interface IPost {
  id: string;
  first_publication_date: string | null;
  last_publication_date: string | null;
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
  previousPost: IPost | null;
  nextPost: IPost | null;
  preview: boolean;
}

export default function Post({
  post,
  previousPost,
  nextPost,
  preview,
}: IPostProps): JSX.Element {
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
      <PostNavigation previousPost={previousPost} nextPost={nextPost} />
      <Comments postId={post.id} />

      {preview ? <ExitPreviewButton /> : null}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    Prismic.Predicates.at('document.type', 'posts'),
    { orderings: '[document.first_publication_date desc]' }
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

export const getStaticProps: GetStaticProps<IPostProps> = async ({
  params,
  preview = false,
  previewData,
}) => {
  const uid = params.slug as string;
  const prismic = getPrismicClient();
  const postResponse = await prismic.getByUID('posts', uid, {
    ref: (previewData as any)?.ref ?? null,
  });

  if (!postResponse) {
    return {
      notFound: true,
    };
  }

  // https://community.prismic.io/t/find-the-next-and-previous-posts-pagination/652
  const previousPostResponse = await prismic.query(
    Prismic.Predicates.at('document.type', 'posts'),
    {
      pageSize: 1,
      after: postResponse.id,
      orderings: '[document.first_publication_date desc]',
      ref: (previewData as any)?.ref ?? null,
    }
  );
  const nextPostResponse = await prismic.query(
    Prismic.Predicates.at('document.type', 'posts'),
    {
      pageSize: 1,
      after: postResponse.id,
      orderings: '[document.first_publication_date]',
      ref: (previewData as any)?.ref ?? null,
    }
  );

  return {
    props: {
      post: postResponse,
      previousPost: previousPostResponse.results[0] ?? null,
      nextPost: nextPostResponse.results[0] ?? null,
      preview,
    },
    revalidate: 60 * 60, // 1h
  };
};

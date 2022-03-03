import PostItem from '../PostItem';
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

interface IPostsListProps {
  posts: IPost[];
}

export default function PostsList({ posts }: IPostsListProps): JSX.Element {
  if (posts?.length) {
    return (
      <section>
        {posts.map(post => {
          return (
            <PostItem key={post.uid} post={post} className={styles.post} />
          );
        })}
      </section>
    );
  }

  return <p>Nenhum post encontrado</p>;
}

import Link from 'next/link';

import commonStyles from '../../styles/common.module.scss';
import styles from './index.module.scss';

interface IPost {
  uid?: string;
  data: {
    title: string;
  };
}

interface IPostNavigationProps {
  previousPost: IPost;
  nextPost: IPost;
}

export default function PostNavigation({
  previousPost,
  nextPost,
}: IPostNavigationProps): JSX.Element {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className={commonStyles.widthContainer}>
      <div className={styles.buttonsContainer}>
        {previousPost ? (
          <Link href={`/post/${previousPost.uid}`}>
            <a className={styles.previousButton}>
              <p className={styles.title}>{previousPost.data.title}</p>
              <p className={styles.label}>Post anterior</p>
            </a>
          </Link>
        ) : null}

        {nextPost ? (
          <Link href={`/post/${nextPost.uid}`}>
            <a className={styles.nextButton}>
              <p className={styles.title}>{nextPost.data.title}</p>
              <p className={styles.label}>Próximo post</p>
            </a>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

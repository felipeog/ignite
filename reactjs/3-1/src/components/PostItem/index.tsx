import Link from 'next/link';

import LabelWithIcon from '../LabelWithIcon';
import { getFormattedPublicationDate } from '../../utils/getFormattedPublicationDate';
import commonStyles from '../../styles/common.module.scss';
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

interface IPostItemProps {
  post: IPost;
  className?: string;
}

export default function PostItem({
  post,
  className,
}: IPostItemProps): JSX.Element {
  return (
    <Link href={`/post/${post.uid}`}>
      <a className={`${styles.container} ${className}`}>
        <article>
          <h1 className={`${styles.title} ${commonStyles.headingMedium}`}>
            {post.data.title}
          </h1>

          <p className={styles.subtitle}>{post.data.subtitle}</p>

          <div className={styles.info}>
            <LabelWithIcon
              className={styles.label}
              icon="calendar"
              label={getFormattedPublicationDate(post.first_publication_date)}
            />
            <LabelWithIcon
              className={styles.label}
              icon="user"
              label={post.data.author}
            />
          </div>
        </article>
      </a>
    </Link>
  );
}

import LabelWithIcon from '../LabelWithIcon';
import { getFormattedPublicationDate } from '../../utils/getFormattedPublicationDate';
import { getTimeEstimateFromContent } from '../../utils/getTimeEstimateFromContent';
import commonStyles from '../../styles/common.module.scss';
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

interface IPostHeaderProps {
  post: IPost;
}

export default function PostHeader({ post }: IPostHeaderProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <img className={styles.banner} src={post.data.banner.url} alt="" />
      </div>

      <div className={commonStyles.widthContainer}>
        <h1 className={`${styles.title} ${commonStyles.headingLarge}`}>
          {post.data.title}
        </h1>

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
          <LabelWithIcon
            className={styles.label}
            icon="clock"
            label={`${getTimeEstimateFromContent(post.data.content)} min`}
          />
        </div>
      </div>
    </div>
  );
}

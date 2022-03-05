import PrismicDOM from 'prismic-dom';

import commonStyles from '../../styles/common.module.scss';
import styles from './index.module.scss';

interface IContent {
  heading: string;
  body: {
    text: string;
  }[];
}

interface IPost {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: IContent[];
  };
}

interface IPostBodyProps {
  post: IPost;
}

export default function PostBody({ post }: IPostBodyProps): JSX.Element {
  return (
    <div className={`${styles.container} ${commonStyles.widthContainer}`}>
      {post.data.content.map(({ heading, body }) => {
        return (
          <div key={heading} className={styles.content}>
            <h2
              className={`${styles.contentTitle} ${commonStyles.headingMedium}`}
            >
              {heading}
            </h2>

            <div
              className={styles.contentText}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(body),
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

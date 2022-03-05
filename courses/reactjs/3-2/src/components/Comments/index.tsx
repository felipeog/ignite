import { useEffect, useRef } from 'react';

import styles from './index.module.scss';
import commonStyles from '../../styles/common.module.scss';

interface ICommentsProps {
  postId: string;
}

export default function Comments({ postId }: ICommentsProps): JSX.Element {
  const commentsRef = useRef<HTMLDivElement>();

  function loadComments(): void {
    const commentsDiv = commentsRef.current;
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'felipeog/spacetraveling-comments');
    script.setAttribute('issue-term', 'url');
    script.setAttribute('theme', 'photon-dark');
    script.setAttribute('crossorigin', 'anonymous');

    commentsDiv.appendChild(script);
  }

  function removeComments(): void {
    const commentsDiv = commentsRef.current;

    if (commentsDiv) {
      commentsDiv.removeChild(commentsDiv.firstChild);
    }
  }

  useEffect(() => {
    loadComments();

    return removeComments;
  }, [postId]);

  return (
    <div
      ref={commentsRef}
      className={`${styles.container} ${commonStyles.widthContainer}`}
    />
  );
}

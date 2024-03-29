import Link from 'next/link';

import styles from './index.module.scss';
import commonStyles from '../../styles/common.module.scss';

export default function ExitPreviewButton(): JSX.Element {
  return (
    <aside className={`${styles.container} ${commonStyles.widthContainer}`}>
      <Link href="/api/exit-preview">
        <a>Sair do modo Preview</a>
      </Link>
    </aside>
  );
}

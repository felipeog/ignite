import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import commonStyles from '../../styles/common.module.scss';
import styles from './index.module.scss';

export default function Header(): JSX.Element {
  const router = useRouter();
  const isHomePage = router?.pathname === '/';

  return (
    <div className={isHomePage ? styles.homeContainer : styles.container}>
      <div className={commonStyles.widthContainer}>
        <Link href="/">
          <a>
            <Image
              className={styles.logo}
              src="/spacetraveling-logo.svg"
              alt="logo"
              width="239"
              height="27"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import styles from './index.module.scss';

const ICONS = {
  calendar: FiCalendar,
  user: FiUser,
  clock: FiClock,
};

interface ILabelWithIconProps {
  icon: 'calendar' | 'user' | 'clock';
  label: string;
  className?: string;
}

export default function LabelWithIcon({
  icon,
  label,
  className,
}: ILabelWithIconProps): JSX.Element {
  const Icon = ICONS[icon];

  return (
    <div className={`${styles.container} ${className}`}>
      <Icon className={styles.icon} />

      <p>{label}</p>
    </div>
  );
}

import { ButtonHTMLAttributes, memo } from 'react';

import { Icon } from './Icon';
import '../styles/button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function ButtonComponent({
  iconName,
  title,
  selected,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: 'selected' })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

function areEqual(prevProps: ButtonProps, nextProps: ButtonProps) {
  return prevProps.selected === nextProps.selected;
}

export const Button = memo(ButtonComponent, areEqual);

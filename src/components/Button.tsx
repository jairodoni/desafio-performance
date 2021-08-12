import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo, useMemo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

function ButtonComponent({ iconName, title, selected, ...rest }: ButtonProps) {
  const calcSelected = useMemo(() => {
    if (selected) {
      return 'selected';
    }
    return;
  }, [selected]);

  const calcColorSelected = useMemo(() => {
    if (selected) {
      return '#FAE800';
    }
    return '#FBFBFB';
  }, [selected]);

  return (
    <button type="button" {...({ className: calcSelected })} {...rest}>
      <Icon name={iconName} color={calcColorSelected} />
      {title}
    </button>
  );
}
export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
})
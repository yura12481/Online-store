import { FC } from 'react';

import { generateButtonClassNames } from '@/utils/className';

import { Props } from '@components/button/types';

import styles from '@components/button/Button.module.scss';

const Button: FC<Props> = ({
  className,
  text,
  type,
  isDisabled,
  iconRight,
  iconLeft,
  onClick,
}) => {
  const buttonClassNames = generateButtonClassNames(className, styles);

  return (
    <button
      className={buttonClassNames}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {iconLeft && iconLeft}
      <p>{text}</p>
      {iconRight && iconRight}
    </button>
  );
};

export default Button;

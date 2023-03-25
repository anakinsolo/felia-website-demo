import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode,
  className?: string,
  buttonType?: 'primary' | 'secondary',
  actionType?: 'submit' | 'reset' | 'button'
}

export default function Button({ children, className = '', buttonType = 'primary', actionType = 'button' }: Props) {
  return (
    <button className={`${buttonType} ${className}`} type={`${actionType}`}>
      {children}
    </button>
  );
}
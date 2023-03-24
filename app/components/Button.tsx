import type { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  className?: string,
  type?: 'primary' | 'secondary',
}

export default function Button({ children, className = '', type = 'primary' }: Props) {
  return (
    <button className={`${type} ${className}`}>
      {children}
    </button>
  );
}
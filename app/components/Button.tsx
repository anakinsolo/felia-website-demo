import type { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  className?: string,
  type?: 'primary' | 'secondary',
}

export default function Button({ children, className = '', type = 'primary' }: Props) {
  return (
    <button className={`button ${type} ${className}`}>
      {children}
    </button>
  );
}
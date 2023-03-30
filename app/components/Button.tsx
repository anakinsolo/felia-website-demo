import { Link } from '@remix-run/react';
import type { MouseEventHandler } from 'react';

interface ButtonProps {
  label: string;
  to?: string;
  className?: string;
  isIcon?: boolean;
  onClick?: MouseEventHandler;
}

export default function Button({ label, to, className, isIcon, onClick }: ButtonProps) {
  const buttonClassName = `button ${className || ''}`;
  
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (to && to.startsWith('#')) {
      event.preventDefault();
      const targetElement = document.querySelector(to);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (isIcon === true) {
    const iconClick = onClick ? onClick : () => {};

    return (
      <button type='button' className={buttonClassName} onClick={iconClick}>
        <i className={label} />
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClassName} onClick={handleClick}>
        {label}
      </Link>
    );
  }

  return (
    <button type='submit' className={buttonClassName}>
      {label}
    </button>
  );
}
import { Link } from '@remix-run/react';

interface ButtonProps {
  label: string;
  to?: string;
  className?: string;
}

export default function Button({ label, to, className }: ButtonProps) {
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

  if (to) {
    return (
      <Link to={to} className={buttonClassName} onClick={handleClick}>
        {label}
      </Link>
    );
  }

  return (
    <button type="submit" className={buttonClassName}>
      {label}
    </button>
  );
}
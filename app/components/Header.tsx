import { Link } from '@remix-run/react';
import Button from './Button';
import SvgLogo from './icons/Logo';
import stylesheet from '~/assets/styles/components/header.css';
import React from 'react';

export const links = [
  { rel: 'stylesheet', href: stylesheet },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu(): void {
    let x = document.getElementById('menu-nav');

    if (x) {
      if (x.className === 'menu') {
        x.className += ' responsive';
        setIsMenuOpen(true);
      } else {
        x.className = 'menu';
        setIsMenuOpen(false);
      }
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.querySelector('#about-section');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className='container header-container'>
        <div className='logo'>
          <SvgLogo />
        </div>
        <div className='menu' id='menu-nav'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/customers'>Our works</Link>
            <Link to='#about-section' onClick={handleClick}>About us</Link>
          </nav>
        </div>
        <div className='button-groups'>
          <Button label='Contact us' to='#contact-section' className='primary' />
          <Button label={isMenuOpen ? 'fa fa-times' : 'fa fa-bars'} className='icon' isIcon onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
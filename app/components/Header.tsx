import { Link } from '@remix-run/react';
import Button from './Button';
import SvgLogo from './icons/Logo';
import stylesheet from '~/assets/styles/components/header.css';

export const links = [
  { rel: 'stylesheet', href: stylesheet },
];

export default function Header() {
  function testFunction(): void {
    console.log('test');
    let x = document.getElementById('menu-nav');

    if (x) {
      if (x.className === 'menu') {
        x.className += ' responsive';
      } else {
        x.className = 'menu';
      }
    }
  }
  
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
            <Link to='/about'>Our team</Link>
            <Link to='/customers'>Customer stories</Link>
          </nav>
        </div>
        <div className='button-groups'>
          <Button label='Contact us' to='#contact-section' className='primary' />
          <Button label='fa fa-bars' className='icon' isIcon onClick={testFunction}></Button>
        </div>
      </div>
    </header>
  );
}
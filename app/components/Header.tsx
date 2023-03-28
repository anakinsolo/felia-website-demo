import { Link } from '@remix-run/react';
import Button from './Button';
import SvgLogo from './icons/Logo';

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
      <div className='container'>
        <div className='logo'>
          <SvgLogo />
        </div>
        <div className='menu' id='menu-nav'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>Our team</Link>
            <Link to='/customers'>Customer stories</Link>
            <Link to='/' className='icon' onClick={testFunction}><i className='fa fa-bars'/></Link>
          </nav>
        </div>
        <Button label='Contact us' to='#contact-section' className='primary' />
      </div>
    </header>
  );
}
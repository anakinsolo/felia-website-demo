import Button from './Button';
import SvgLogo from './icons/Logo';
export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <SvgLogo />
        </div>
        <div className='menu'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/about'>Our team</a></li>
            <li><a href='/customers'>Customer stories</a></li>
          </ul>
        </div>
        <Button>
          <a href="/contact">Contact us</a>
        </Button>
      </div>
    </header>
  );
}
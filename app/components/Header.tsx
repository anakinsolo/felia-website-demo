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
            <li><a href='/our-services'>Services</a></li>
            <li><a href='/our-team'>Our team</a></li>
            <li><a href='/our-customers'>Customer stories</a></li>
          </ul>
        </div>
        <Button>
          <a href="/contact">Contact us</a>
        </Button>
      </div>
    </header>
  );
}
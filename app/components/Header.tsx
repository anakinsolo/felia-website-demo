export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <svg xmlns="http://www.w3.org/2000/svg">
            <image href="/svg/felia-white.svg"/>
          </svg>
        </div>
        <div className='menu'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/team'>Our team</a></li>
            <li><a href='/customers'>Customer stories</a></li>
          </ul>
        </div>
        <button className='button-primary'><a href="/contact">Contact us</a></button>
      </div>
    </header>
  );
}
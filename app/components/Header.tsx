export default function Header() {
  return (
    <header>
      <div className='container'>
        <div>Logo</div>
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
export default function ServiceContainer({ logo, title, title_2 }) {
  const Logo = logo;
  return (
    <div className='service-container'>
      <div className='service-card'>
        <div className='svg-container'>
          <Logo />
        </div>
        <div className='description'>
          {title}
          {title_2 && (
            <>
              <br />
              {title_2}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
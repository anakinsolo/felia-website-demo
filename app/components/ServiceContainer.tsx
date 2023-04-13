interface ServiceContainerProps {
  logo: React.FC<React.SVGProps<SVGSVGElement>> | string;
  title: string;
  title_2?: string | null;
  price?: string;
  isDetailed?: boolean;
}

export default function ServiceContainer({ logo, title, title_2, price, isDetailed = false }: ServiceContainerProps) {
  const Logo = logo;
  if (isDetailed === true) {
    return (<div className='service-container-detailed'>
      <div className='service-card'>
        <div className='svg-container'>
          <Logo />
        </div>
        <div className='title'>{title}</div>
        {/* <div className='price title inner-text'>{price}</div> */}
        <div className='description'>{title_2}</div>
      </div>
    </div>);
  }

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
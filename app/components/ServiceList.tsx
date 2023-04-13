import ServiceContainer from './ServiceContainer';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';

export default function ServiceList({ blok }) {
  const logoMap = {
    'DevelopmentLogo': DevelopmentLogo,
    'EcomLogo': EcomLogo,
    'DesignLogo': DesignLogo,
    'CmsLogo': CmsLogo,
    'SeoLogo': SeoLogo,
    'MaintainanceLogo': MaintainanceLogo,
  };

  return (
    <div className='service-list'>
      {
        blok.services?.map((service) => {
          const Logo = logoMap[service.logo];
          return (<ServiceContainer key={service._uid} logo={Logo} title={service.title} title_2={service.title_2} />);
        })
      }
    </div>
  );
}
import ServiceContainer from './ServiceContainer';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';

export default function ServiceList({ blok }) {
  const services = [
    {
      id: 1,
      icon: DevelopmentLogo,
      title: 'Custom Web',
      title_2: 'Development',
    },
    {
      id: 2,
      icon: EcomLogo,
      title: 'E-commerce',
      title_2: 'Development',
    },
    {
      id: 3,
      icon: DesignLogo,
      title: 'UI & UX Design',
      title_2: null,
    },
    {
      id: 4,
      icon: CmsLogo,
      title: 'Content Management',
      title_2: 'Systems',
    },
    {
      id: 5,
      icon: SeoLogo,
      title: 'Search Engine',
      title_2: 'Optimization',
    },
    {
      id: 6,
      icon: MaintainanceLogo,
      title: 'Website',
      title_2: 'Maintenance',
    },
  ];
  console.log('service_list:', blok.services);
  return (
    <div className='service-list'>
      {/* {
        blok.services?.map((service) => (
          <ServiceContainer key={service._uid} logo={service.logo} title={service.title} title_2={service.title_2} />
        ))
      } */}
      {
        services.map((service, index) => (
          <ServiceContainer key={service.id} logo={service.icon} title={service.title} title_2={service.title_2} />
        ))
      }
    </div>
  );
}
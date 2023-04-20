import type { LinksFunction, MetaFunction } from '@remix-run/node';
import stylesheet from '~/assets/styles/pages/services.css';
import ServiceContainer from '~/components/ServiceContainer';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => ({
  title: 'Professional Web Development & E-commerce Services | Felia Solutions Oy',
  description: 'Felia Solutions Oy offers top-notch web development, e-commerce solutions, and website maintenance services for small and medium-sized businesses. Let\'s grow your online presence together!',
  keywords: 'web development, web design, e-commerce solutions, website maintenance, content management systems, custom development, consultancy',
  canonical: 'https://www.felia.fi/services',
});


export default function Services() {
  const services = [
    {
      title: 'Custom Web Development',
      description: 'Our team of experienced developers can create a custom website that reflects your brand and meets your specific business needs. From e-commerce sites to corporate portals, we can build it all.',
      icon: DevelopmentLogo,
      price: 'from 600 EUR'
    },
    {
      title: 'E-commerce Development',
      description: 'We can help you set up a powerful e-commerce platform that enables you to sell products online, manage orders, and track inventory. Our e-commerce solutions are designed to be easy to use and scalable to meet your growing business needs.',
      icon: EcomLogo,
      price: 'from 1000 EUR ',
    },
    {
      title: 'UI & UX Design',
      description: 'We can help you create a unique and memorable user experience for your website. Our team of designers can create a custom design that reflects your brand and meets your specific business needs.',
      icon: DesignLogo,
      price: 'from 400 EUR',
    },
    {
      title: 'Content Management Systems',
      description: 'We can help you set up a powerful content management system that enables you to manage your website content easily. Our CMS solutions are designed to be easy to use and scalable to meet your growing business needs.',
      icon: CmsLogo,
      price: 'from 65 EUR / hour',
    },
    {
      title: 'Search Engine Optimization',
      description: 'We can help you increase your website traffic and improve your search engine rankings. Our SEO solutions are designed to be easy to use and scalable to meet your growing business needs.',
      icon: SeoLogo,
      price: 'from 65 EUR / hour',
    },
    {
      title: 'Website Maintenance',
      description: 'We can help you maintain your website and keep it up to date. Our maintenance solutions are designed to be easy to use and scalable to meet your growing business needs.',
      icon: MaintainanceLogo,
      price: 'from 10 EUR / month',
    },
  ];
  return (
    <div className='container'>
      <section className='service-page'>
        <div className='title'>Our <span className='inner-text'>services</span></div>
        <div className='service-list'>
          {
            services.map((service, index) => (
              <ServiceContainer key={index} title={service.title} title_2={service.description} logo={service.icon} price={service.price} isDetailed={true} />
            ))
          }
        </div>
        {/* <div className='note'>*All prices are excluded of VAT 24%</div> */}
      </section>
    </div>
  );
}
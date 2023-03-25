import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/assets/styles/pages/services.css';
import Button from '~/components/Button';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];


export default function Services() {
  return (
    <div className='container'>
      <section className='service-page'>
        <div className='title'>Our <span className='inner-text'>services</span></div>
        <div className='service-list'>
          <div className='service-container-detailed'>
            <div className='service-card'>
              <div className='svg-container'>
                <DevelopmentLogo />
              </div>
              <div className='title'>Custom Web Development</div>
              <div className='description'>Our team of experienced developers can create a custom website that reflects your brand and meets your specific business needs. From e-commerce sites to corporate portals, we can build it all.</div>
            </div>
          </div>
          <div className='service-container-detailed'>
            <div className='service-card'>
              <div className='svg-container'>
                <EcomLogo />
              </div>
              <div className='title'>E-commerce Development</div>
              <div className='description'>We can help you set up a powerful e-commerce platform that enables you to sell products online, manage orders, and track inventory. Our e-commerce solutions are designed to be easy to use and scalable to meet your growing business needs. <br /> Keywords: Magento - Shopify - Solutions Architect - Integrations</div>
            </div>
          </div>
          <div className='service-container-detailed'>
            <div className='service-card'>
              <div className='svg-container'>
                <DesignLogo />
              </div>
              <div className='title'>UI & UX Design</div>
              <div className='description'>In today's mobile-first world, it's essential to have a website that looks great and functions smoothly on all devices. We specialize in responsive design, ensuring your website is optimized for smartphones, tablets, and desktops. In addition to that, a great website isn't just about aesthetics. It's also about creating a seamless user experience that engages visitors and drives conversions. Our UX designers can help you create a website that not only looks great but also delivers results.</div>
            </div>
          </div>
          <div className='service-container-detailed'>
            <div className='service-card'>
              <div className='svg-container'>
                <CmsLogo />
              </div>
              <div className='title'>Content Management Systems</div>
              <div className='description'>Managing your website should be easy. That's why we offer robust content management systems that enable you to update your site quickly and easily. Whether you need a simple blog or a complex enterprise-level CMS, we've got you covered.</div>
            </div>
          </div>
          <div className='service-container-detailed'>
            <div className='service-card'>
              <div className='svg-container'>
                <SeoLogo />
              </div>
              <div className='title'>Search Engine Optimization</div>
              <div className='description'>A beautiful website is worthless if no one can find it. Our SEO experts can help you optimize your site for search engines, so you can rank higher in search results and attract more visitors.</div>
            </div>
          </div>
          <div className='service-container-detailed'>
            <div className='service-card'>
              <div className='svg-container'>
                <MaintainanceLogo />
              </div>
              <div className='title'>Website Maintenance</div>
              <div className='description'>Keeping your website up-to-date and secure is essential. We offer website maintenance services that ensure your site is always running smoothly and free from bugs and security vulnerabilities. <br />Keywords: Cloud - AWS - Security - Maintenance</div>
            </div>
          </div>
        </div>
        <div className='contact-button'>
          <Button>
            <a href='/contact'>Contact us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/assets/styles/pages/services.css';
import Button from '~/components/Button';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];


export default function Services() {
  return (
    <div className='container services'>
      <div className='title'>Our <span className='inner-text'>services</span></div>
      <div className='service-description'>
        <div>Custom Web Development</div>
        <div>E-commerce Development</div>
        <div>UI & UX Design</div>
        <div>Content Management Systems</div>
        <div>Search Engine Optimization</div>
        <div>Website Maintenance</div>
      </div>
      <div className='contact-button'>
        <Button>
          <a href='/contact'>Contact us</a>
        </Button>
      </div>
    </div>
  );
}
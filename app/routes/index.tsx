import Button from '~/components/Button';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';

export default function Index() {
  return (
    <div className='container'>
      <div className='hero-section'>
        <div className='title'>
          Bringing ideas to life: <br />
          Digital solutions <br />
          made easy <br />
        </div>
        <div className='hero-content'>
          Empowering businesses to succeed in the digital world. We provide a <br />
          complete solution for website and e-commerce design, development, <br />
          hosting, and maintenance, all backed by expert consultancy. Let us bring <br />
          your ideas to life and help you succeed online.
        </div>
        <div className='hero-button'>
          <Button>
            <a href='/contact'>Contact us</a>
          </Button>
          <Button type='secondary'>
            <a href='/our-services'>Our services</a>
          </Button>
        </div>
      </div>
      <div className='services-section'>
        <div className='title'>Our services</div>
        <div className='service-list'>
          <div className='service-container'>
            <DevelopmentLogo />
            <div className='description'>Custom Web Development</div>
          </div>
          <div className='service-container'>
            <EcomLogo />
            <div className='description'>E-commerce Development</div>
          </div>
          <div className='service-container'>
            <DesignLogo />
            <div className='description'>UI & UX Design</div>
          </div>
          <div className='service-container'>
            <CmsLogo />
            <div className='description'>Content Management Systems</div>
          </div>
          <div className='service-container'>
            <SeoLogo />
            <div className='description'>Search Engine Optimization</div>
          </div>
          <div className='service-container'>
            <MaintainanceLogo />
            <div className='description'>Website Maintenance</div>
          </div>
        </div>
        
      </div>
      <div className='about-section'>
        about section
      </div>
      <div className='contact-section'>
        contact section
      </div>
    </div>
  );
}

import Button from '~/components/Button';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';

export default function Index() {
  return (
    <div className='container'>
      <div className='hero-section'>
        <div className='title'>
          Bringing ideas to life: <br />
          <span className='inner-text'>Digital solutions</span> <br />
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
      <div className='service-section'>
        <div className='title'>Our <span className='inner-text'>services</span></div>
        <div className='service-list'>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <DevelopmentLogo />
              </div>
              <div className='description'>Custom Web Development</div>
            </div>
          </div>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <EcomLogo />
              </div>
              <div className='description'>E-commerce Development</div>
            </div>
          </div>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <DesignLogo />
              </div>
              <div className='description'>UI & UX Design</div>
            </div>
          </div>          
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <CmsLogo />
              </div>
              <div className='description'>Content Management Systems</div>
            </div>
          </div>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <SeoLogo />
              </div>
              <div className='description'>Search Engine Optimization</div>
            </div>
          </div>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <MaintainanceLogo />
              </div>
              <div className='description'>Website Maintenance</div>
            </div>
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

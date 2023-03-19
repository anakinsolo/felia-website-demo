import Button from '~/components/Button';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from '~/components/icons';

export default function Index() {
  return (
    <div className='container'>
      <div className='hero-section'>
        <div className='hero-title'>
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
        <div className='service-title'>Our services</div>
        <div className='service-list'>
          <div className='service-container'>
            <Icon1 />
            <div className='description'>Content Management Systems</div>
          </div>
          <div className='service-container'>
            <Icon2 />
            <div className='description'>UI & UX Design</div>
          </div>
          <div className='service-container'>
            <Icon3 />
            <div className='description'>Search Engine Optimization</div>
          </div>
          <div className='service-container'>
            <Icon4 />
            <div className='description'>Website Maintenance</div>
          </div>
          <div className='service-container'>
            <Icon5 />
            <div className='description'>E-commerce Development</div>
          </div>
          <div className='service-container'>
            <Icon6 />
            <div className='description'>Custom Web Development</div>
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

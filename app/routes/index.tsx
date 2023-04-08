import Button from '~/components/Button';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';
import stylesheet from '~/assets/styles/pages/home.css';
import type { ActionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import ContactSection, { links as contactSectionStylesheet } from '~/components/ContactSection';
import type { FormValues } from '~/services/mailservice.server';
import { sendMail } from '~/services/mailservice.server';
import FlashMessage, { links as flashMessageStyles } from '~/components/FlashMessage';
import { useActionData } from '@remix-run/react';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...contactSectionStylesheet,
  ...flashMessageStyles
];

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  const data: FormValues = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    message: values.message
  };

  const { message, error } = sendMail(data);
  return json({ message, error }, { status: error ? 500 : 200 });
}

export default function Index() {
  const data = useActionData();

  return (
    <div className='container home'>
      <section className='hero-section'>
        <div className='title'>
          Bringing ideas to life: <br />
          <span className='inner-text'>Digital solutions</span> <br />
          made easy
        </div>
        <div className='hero-content'>
          Empowering businesses to succeed in the digital world. We provide a <br />
          complete solution for website and e-commerce design, development, <br />
          hosting, and maintenance, all backed by expert consultancy. Let us bring <br />
          your ideas to life and help you succeed online.
        </div>
        <div className='hero-button'>
          <Button label='Contact us' to='#contact-section' className='primary' />
          <Button label='Our services' to='/services' className='secondary' />
        </div>
      </section>
      <section className='service-section'>
        <div className='title'>Our <span className='inner-text'>services</span></div>
        <div className='service-list'>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <DevelopmentLogo />
              </div>
              <div className='description'>Custom Web<br />Development</div>
            </div>
          </div>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <EcomLogo />
              </div>
              <div className='description'>E-commerce<br />Development</div>
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
              <div className='description'>Content Management<br />Systems</div>
            </div>
          </div>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <SeoLogo />
              </div>
              <div className='description'>Search Engine<br />Optimization</div>
            </div>
          </div>
          <div className='service-container'>
            <div className='service-card'>
              <div className='svg-container'>
                <MaintainanceLogo />
              </div>
              <div className='description'>Website<br />Maintenance</div>
            </div>
          </div>
        </div>
      </section>
      <section className='about-section row'>
        <div className='about-titles'>
          <div className='title'>Who <span className='inner-text'>we</span> are</div>
          <div className='title small'>We <span className='inner-text'>help</span> you with your projects</div>
        </div>
        <div className='about-content'>
          <div>
            Founded in 2023, we are a team of dedicated professionals committed to providing exceptional service and cutting-edge technology to our clients. We specialize in designing, building, operating, and maintaining websites and web applications that add digital value to your business.
          </div>
          <div>
            Our experienced consultants are highly skilled in e-commerce websites and can help you meet your deadlines, expand your current applications, or maintain your existing solutions.Simply leave us a message, and we'll get back to you within 1-2 business days.
          </div>
        </div>
      </section>
      <section className='contact-section'>
        <ContactSection />
      </section>
      <FlashMessage message={data?.message} error={data?.error} />
    </div>
  );
}

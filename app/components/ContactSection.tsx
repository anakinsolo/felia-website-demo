import { Form } from '@remix-run/react';
import Button from './Button';
import stylesheet from '~/assets/styles/components/contact-section.css';

export const links = [
  { rel: 'stylesheet', href: stylesheet },
];

export default function ContactSection() {
  return (
    <div id='contact-section' className='row'>
      <div className='contact-info'>
        <div className='title'>Get in <span className='inner-text'>touch</span></div>
        <div className='title small'>with our <span className='inner-text'>team</span></div>
        <div className='contact-detail-container'>
          {/* <div>Business ID: 3340263-9</div>
          <div>Email: hello@felia.fi</div>
          <div>Tel: (+358)50 357 7421</div> */}
          <div className='social-media-container'>
            <a href='https://www.facebook.com/felia.solutions.oy/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
              <i className='fa fa-facebook-square' aria-hidden='true'></i>
            </a>
            {/* <a href='/' target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-linkedin-square' aria-hidden='true'></i>
            </a> */}
          </div>
        </div>
      </div>
      <div className='contact-form'>
        <Form method='post' reloadDocument >
          <div className="input-container">
            <div className="input-item top">
              <input className='contact-input' type='text' id='name' name='name' placeholder='Your name*' required />
            </div>
            <div className="input-item mid">
              <div className="input-item">
                <input className='contact-input' type='tel' id='phone' name='phone' placeholder='Your phone*' required />
              </div>
              <div className="input-item">
                <input className='contact-input' type='email' id='email' name='email' placeholder='Your email*' required />
              </div>
            </div>
            <div className="input-item bottom">
              <textarea className='contact-input' id='message' name='message' rows={10} cols={50} placeholder='Leave us a message*' required></textarea>
            </div>
          </div>
          <Button label='Submit' className='primary submit' />
        </Form>
      </div>
    </div>
  );
}
import { Form } from '@remix-run/react';
import Button from './Button';

export default function ContactSection() {
  return (
    <div className='row'>
      <div className='contact-info'>
        <div className='title'>Get in <span className='inner-text'>touch</span></div>
        <div className='title small'>with our <span className='inner-text'>team</span></div>
        <div className='contact-detail-container'>
          <div>Email: hello@felia.fi</div>
          <div>Tel: (+358)50 357 7421</div>
          <div className='social-media-container'>
            <a href='https://www.facebook.com/felia.fi/' target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-facebook-square' aria-hidden='true'></i>
            </a>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-linkedin-square' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='contact-form'>
        <Form method='post' action='/contact'>
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
          <Button actionType='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  );
}
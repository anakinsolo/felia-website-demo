
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
            <a href='https://www.facebook.com/felia.fi/' target='_blank' rel='noopener noreferrer'>Website</a>
          </div>
        </div>
      </div>
      <div className='contact-form'>Contact form here</div>
    </div>
  );
}
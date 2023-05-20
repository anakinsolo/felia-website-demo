import SvgLogo from './icons/Logo';

export default function Footer() {
  return (
    <div className='container footer'>
      <div className='footer-content'>
        <div className='svg-container footer-row'>
          <SvgLogo />
        </div>
        <div className='company-info footer-row'>
          <div className='info-title'>Contact Information</div>
          <div className='info-content'>
            <div>Business ID: 3340263-9</div>
            <div>Email: hello@felia.fi</div>
            <div>Tel: +358 50 357 7421</div>
          </div>
        </div>
        <div className='info-certificate footer-row'>
          <a href="https://www.nerot.fi/kayttaja/14448/" target="_blank" rel="noreferrer"><img src="https://www.nerot.fi/images/nerot-suosittelee@2x.png" width="220" height="85" /></a>
        </div>
      </div>
      <div className='copy-right'>
        © 2023 Copyright Felia Solutions Oy
      </div>
    </div>
  );
}
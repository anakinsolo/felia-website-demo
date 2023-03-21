import SvgLogo from './icons/Logo';

export default function Footer() {
  return (
    <div className='container footer'>
      <div className='svg-container'>
        <SvgLogo />
      </div>
      <div className='copy-right'>
        © 2023 Copyright Felia Solutions Oy
      </div>
    </div>
  );
}
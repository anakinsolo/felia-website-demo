import { storyblokEditable } from '@storyblok/react';
import Button from './Button';

const Hero = ({ blok }) => {
  console.log('Hero blok:', blok);
  console.log('Hero content:',);
  return (
    <section className='hero-section'>
      <div className='title'>
        {blok.title} <br />
        <span className='inner-text'>{blok.title_2}</span> <br />
        {blok.title_3}
      </div>
      <div className='hero-content'>
        {blok.content} <br />
        {blok.content_2} <br />
        {blok.content_3} <br />
        {blok.content_4}
      </div>
      <div className='hero-button'>
        <Button label='Contact us' to='#  ' className='primary' />
        <Button label='Our services' to='/services' className='secondary' />
      </div>
    </section>
  );
};

export default Hero;
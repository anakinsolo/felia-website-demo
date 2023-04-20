import { StoryblokComponent } from '@storyblok/react';

const Hero = ({ blok }) => {
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
        {
          blok.buttons?.map((button) => {
            return (
              <StoryblokComponent blok={button} key={button._uid} />
            );
          })
        }
      </div>
    </section>
  );
};

export default Hero;
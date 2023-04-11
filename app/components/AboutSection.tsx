const AboutSection = ({ blok = null }) => {
  return (
    <div className='row'>
      <div className='about-titles'>
        <div className='title'>{blok.title_1}<span className='inner-text'>{blok.title_2}</span>{blok.title_3}</div>
        <div className='title small'>{blok.title_small_1}<span className='inner-text'>{blok.title_small_2}</span>{blok.title_small_3}</div>
      </div>
      <div className='about-content'>
        <div>
          {blok.content_1}
        </div>
        <div>
          {blok.content_2}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
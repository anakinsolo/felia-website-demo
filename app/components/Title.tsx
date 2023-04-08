export default function Title({ blok }) {
  console.log('title:', blok);
  return (
    <div className='title'>{blok.title}
      {blok.inner_text &&
        <span className='inner-text'>
          {blok.inner_text}
        </span>
      }
    </div>
  );
}
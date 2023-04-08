import Button from './Button';

const StoryblokButton = ({ blok }) => {
  return (
    <Button
      label={blok.label}
      to={blok.link.url}
      className={blok.style}
      key={blok._uid}
    />
  );
};

export default StoryblokButton;
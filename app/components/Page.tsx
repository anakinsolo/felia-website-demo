import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Page = ({ blok }) => {
  console.log('Page blok:', blok);
  return (
    <>
      {
        blok?.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))
      }
    </>
  );
};

export default Page;

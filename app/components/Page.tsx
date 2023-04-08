import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Page = ({ blok }) => {
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

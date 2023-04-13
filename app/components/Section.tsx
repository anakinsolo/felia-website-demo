import { StoryblokComponent } from '@storyblok/react';

export default function Section({ blok }) {
  return (
    <section id={blok.section_id ? blok.section_id : ''} className={blok.class_names}>
      {
        blok.content?.map((contentItem) => (
          <StoryblokComponent key={contentItem._uid} blok={contentItem} />
        ))
      }
    </section>
  );
}
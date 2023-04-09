import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';
import ServiceContainer from './ServiceContainer';
import { StoryblokComponent } from '@storyblok/react';
import ServiceList from './ServiceList';

export default function Section({ blok }) {
  return (
    <section className={blok.class_names}>
      {
        blok.content?.map((contentItem) => (
          <StoryblokComponent key={contentItem._uid} blok={contentItem} />
        ))
      }
    </section>
  );
}
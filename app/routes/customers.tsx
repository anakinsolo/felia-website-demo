import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { ISbStoriesParams } from '@storyblok/react';
import { useStoryblokState } from '@storyblok/react';
import { StoryblokComponent } from '@storyblok/react';
import { getStoryblokApi } from '@storyblok/react';
import stylesheet from '~/assets/styles/pages/portfolios.css';
import PortfolioItem, { links as itemStylesheet } from '~/components/PortfolioItem';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...itemStylesheet
];

export const loader = async ({ params }: LoaderArgs) => {
  const slug = 'customers';
  let sbParams: ISbStoriesParams = {
    version: 'draft',
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
  return json(data?.story);
};

export default function Customers() {
  let story = useLoaderData();
  story = useStoryblokState(story);

  return (
    <div className='container'>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
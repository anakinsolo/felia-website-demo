import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import stylesheet from '~/assets/styles/pages/test.css';
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent
} from '@storyblok/react';
import type { ISbStoriesParams } from '@storyblok/react';
import { useLoaderData } from '@remix-run/react';



export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const loader = async ({ params }: LoaderArgs) => {
  let sbParams: ISbStoriesParams = {
    version: 'draft',
  };

  let { data } = await getStoryblokApi().get('cdn/stories/test', sbParams);

  return json(data?.story);
};

export default function Test() {
  let story = useLoaderData();

  story = useStoryblokState(story);
  return (
    <div className='container'>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
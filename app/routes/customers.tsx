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
    version: process.env.NODE_ENV !== 'production' ? 'draft' : 'published',
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
  return json(data?.story);
};

export default function Customers() {
  // const works = [
  //   {
  //     id: 1,
  //     title: 'The Grand Good Riddance website',
  //     description: 'UI & UX Design  /  E-commerce Development'
  //   },
  //   {
  //     id: 2,
  //     title: 'The Grand Good Riddance website',
  //     description: 'UI & UX Design  /  E-commerce Development',
  //     isReversed: 'reversed'
  //   }
  // ];

  let story = useLoaderData();
  story = useStoryblokState(story);

  return (
    <div className='container'>
      <StoryblokComponent blok={story.content} />
      {/* <section className='portfolio-page'>
        <div className='title'>Our <span className='inner-text'>works</span></div>
        <div className='portfolio-list'>
          {
            works.map((work) => {
              return (
                <PortfolioItem key={work.id} title={work.title} description={work.description} isReversed={work.isReversed ?? ''} />
              );
            })
          }
        </div>
      </section> */}
    </div>
  );
}
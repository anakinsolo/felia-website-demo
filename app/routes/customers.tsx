import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { ISbStoriesParams } from '@storyblok/react';
import { useStoryblokState } from '@storyblok/react';
import { StoryblokComponent } from '@storyblok/react';
import { getStoryblokApi } from '@storyblok/react';
import stylesheet from '~/assets/styles/pages/portfolios.css';
import { links as itemStylesheet } from '~/components/PortfolioItem';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...itemStylesheet
];

export const meta: MetaFunction = () => ({
  title: 'Our Customers | Felia Solutions Oy',
  description: 'Discover Felia Solutions Oy\'s satisfied customers and read their testimonials. Learn how our web development, e-commerce, and web design services have helped businesses grow their online presence.',
  keywords: 'satisfied customers, client testimonials, web development, e-commerce solutions, web design, website maintenance, content management systems, web hosting, custom development, consultancy, Shopify, Magento, small and medium-sized businesses, professional web services, responsive web design, online store',
  canonical: 'https://www.felia.fi/customers',
});

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
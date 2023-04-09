import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type { ReactNode } from 'react';
import Footer from './components/Footer';
import Header, { links as headerStylesheet } from './components/Header';
import stylesheet from './assets/styles/global.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from './components/Page';
import Hero from './components/Hero';
import StoryblokButton from './components/StoryblokButton';
import Section from './components/Section';
import Title from './components/Title';
import ServiceList from './components/ServiceList';

const isServer = typeof window === 'undefined';
const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : window.env.STORYBLOK_PREVIEW_TOKEN;

storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    button: StoryblokButton,
    section: Section,
    title: Title,
    service_list: ServiceList
  },
});

export async function loader() {
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
  });
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ...headerStylesheet,
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Bringing ideas to life: Digital solutions made easy',
  viewport: 'initial-scale=1',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { env } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <RootLayout>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </RootLayout>
  );
}
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { ReactNode } from 'react';
import Footer from './components/Footer';
import Header, { links as headerStylesheet } from './components/Header';
import stylesheet from './assets/styles/global.css';

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

const RootLayout = ({ children }: {children: ReactNode}) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
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
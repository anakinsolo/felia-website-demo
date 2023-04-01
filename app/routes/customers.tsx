import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/assets/styles/pages/portfolios.css';
import PortfolioItem, { links as itemStylesheet } from '~/components/PortfolioItem';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...itemStylesheet
];

export default function Customers() {
  const works = [
    { 
      id: 1,
      title: 'The Grand Good Riddance website',
      description: 'UI & UX Design  /  E-commerce Development' 
    },
    { 
      id: 2,
      title: 'The Grand Good Riddance website',
      description: 'UI & UX Design  /  E-commerce Development',
      isReversed: 'reversed'
    }
  ];
  return (
    <div className='container'>
      <section className='portfolio-page'>
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
      </section>
    </div>
  );
}
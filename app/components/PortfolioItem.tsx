import stylesheet from '~/assets/styles/components/portfolio-item.css';

interface Item {
  title: string,
  description: string,
  isReversed?: string
}

export const links = [
  { rel: 'stylesheet', href: stylesheet },
];

export default function PortfolioItem(item :Item) {

  return (
    <div className={`portfolio-item-container ${item.isReversed}`}>
      <div className='portfolio-img item'>
        Image here
      </div>
      <div className='portfolio-info item'>
        <div className='portfolio-title'>
          { item.title }
        </div>
        <div className='portfolio-desc'>
          { item.description }
        </div>
      </div>
    </div>
  );
}
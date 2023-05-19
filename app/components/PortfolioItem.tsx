import stylesheet from '~/assets/styles/components/portfolio-item.css';
import Button from './Button';

interface Item {
  title: string,
  description: string,
  image?: string,
  link: string,
}

export const links = [
  { rel: 'stylesheet', href: stylesheet },
];

export default function PortfolioItem(item: Item) {

  return (
    <div className='portfolio-item-container'>
      <div className='portfolio-img item'>
        <img src={item.image} alt='Work' />
      </div>
      <div className='portfolio-info item'>
        <div className='portfolio-title title small'>
          {item.title}
        </div>
        <div className='portfolio-desc'>
          {item.description}
        </div>
        {
          item.link &&
          <div className='portfolio-link'>
            <a href={item.link} target='_blank' rel='noreferrer'>Visit</a>
          </div>
        }
      </div>
    </div>
  );
}
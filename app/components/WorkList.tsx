import PortfolioItem from './PortfolioItem';

// make work interface
interface Work {
  _uid: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
  link: {
    id: string,
    url: string,
    linktype: string,
    fieldtype: string,
    cached_url: string,
  }
}

export default function WorkList({ blok }) {
  return (
    <div className='portfolio-list'>
      {
        blok.works.map((work: Work) => {
          return (
            <PortfolioItem key={work._uid} title={work.title} description={work.description} image={work.image} link={work.link.url} />
          );
        })
      }
    </div>
  );
}
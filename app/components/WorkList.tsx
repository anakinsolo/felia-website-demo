import PortfolioItem from './PortfolioItem';

export default function WorkList({ blok }) {
  return (
    <div className='portfolio-list'>
      {
        blok.works.map((work) => {
          console.log(work);
          return (
            <PortfolioItem key={work.id} title={work.title} description={work.description} image={work.image} isReversed={work.isReversed ?? ''} />
          );
        })
      }
    </div>
  );
}
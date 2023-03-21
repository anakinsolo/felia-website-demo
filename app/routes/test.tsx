import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/assets/styles/pages/test.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function Test() {
  const a = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className='container'>
      <div className='basic-grid'>
        {
          a.map((item, index) => {
            return (
              <div className='card' key={index}>{item}</div>
            );
          })
        }
      </div>
    </div>
  );
}
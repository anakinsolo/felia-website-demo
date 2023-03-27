import type { LinksFunction } from '@remix-run/node';
import ContactSection from '~/components/ContactSection';
import stylesheet from '~/assets/styles/pages/about.css';
import Member from '~/components/Member';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function Team() {
  const memberList = [
    {
      id: 1,
      name: 'Tuan Dinh',
      position: 'Co-Founder / Board Member',
      description: 'Tuan is a software engineer with over 10 years of experience in the industry. He has worked with a variety of clients from startups to large corporations, and has a passion for building scalable and maintainable software. He is also a co-founder of a startup in the education industry, and has a strong background in business and entrepreneurship.'
    },
    {
      id: 2,
      name: 'Cuong Tran',
      position: 'Co-Founder / CEO',
      description: 'Cuong is a software engineer with over 10 years of experience in the industry. He has worked with a variety of clients from startups to large corporations, and has a passion for building scalable and maintainable software. He is also a co-founder of a startup in the education industry, and has a strong background in business and entrepreneurship.'
    }
  ];
  return (
    <div className='container'>
      <section className='about-page'>
        <div className='title'>About <span className='inner-text'>us</span></div>
        <div className='team-list'>
          {
            memberList.map((member) => {
              return (
                <div className='team-list-item' key={member.id}>
                  <Member key={member.id} name={member.name} position={member.position} description={member.description} />
                </div>
              );
            })
          }
        </div>
        <div className='contact-section'>
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
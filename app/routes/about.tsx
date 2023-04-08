import type { ActionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import ContactSection, { links as contactSectionStylesheet } from '~/components/ContactSection';
import stylesheet from '~/assets/styles/pages/about.css';
import Member from '~/components/Member';
import type { FormValues } from '~/services/mailservice.server';
import { sendMail } from '~/services/mailservice.server';
import { useActionData } from '@remix-run/react';
import FlashMessage, { links as flashMessageStyles } from '~/components/FlashMessage';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...contactSectionStylesheet,
  ...flashMessageStyles
];

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  const data: FormValues = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    message: values.message
  };

  const { message, error } = await sendMail(data);
  return json({ message, error }, { status: error ? 500 : 200 });
}

export default function Team() {
  const data = useActionData();
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
                <Member key={member.id} name={member.name} position={member.position} description={member.description} />
              );
            })
          }
        </div>
      </section>
      <section className='contact-section'>
        <ContactSection />
      </section>
      <FlashMessage message={data?.message} error={data?.error} />
    </div>
  );
}
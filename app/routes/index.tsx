import Button from '~/components/Button';
import { CmsLogo, DesignLogo, DevelopmentLogo, EcomLogo, MaintainanceLogo, SeoLogo } from '~/components/icons';
import stylesheet from '~/assets/styles/pages/home.css';
import type { ActionArgs, LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import ContactSection, { links as contactSectionStylesheet } from '~/components/ContactSection';
import type { FormValues } from '~/services/mailservice.server';
import { sendMail } from '~/services/mailservice.server';
import FlashMessage, { links as flashMessageStyles } from '~/components/FlashMessage';
import { useActionData, useLoaderData } from '@remix-run/react';
import type { ISbStoriesParams } from '@storyblok/react';
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent
} from '@storyblok/react';
import ServiceContainer from '~/components/ServiceContainer';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...contactSectionStylesheet,
  ...flashMessageStyles
];

export const loader = async ({ params }: LoaderArgs) => {
  const slug = params.slug || 'home';
  let sbParams: ISbStoriesParams = {
    version: 'draft',
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);

  return json(data?.story);
};

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

export default function Index() {
  const data = useActionData();
  let story = useLoaderData();
  story = useStoryblokState(story);

  return (
    <div className='container home'>
      <StoryblokComponent blok={story.content} />
      <section className='about-section row'>
        <div className='about-titles'>
          <div className='title'>Who <span className='inner-text'>we</span> are</div>
          <div className='title small'>We <span className='inner-text'>help</span> you with your projects</div>
        </div>
        <div className='about-content'>
          <div>
            Founded in 2023, we are a team of dedicated professionals committed to providing exceptional service and cutting-edge technology to our clients. We specialize in designing, building, operating, and maintaining websites and web applications that add digital value to your business.
          </div>
          <div>
            Our experienced consultants are highly skilled in e-commerce websites and can help you meet your deadlines, expand your current applications, or maintain your existing solutions.Simply leave us a message, and we'll get back to you within 1-2 business days.
          </div>
        </div>
      </section>
      <section className='contact-section'>
        <ContactSection />
      </section>
      <FlashMessage message={data?.message} error={data?.error} />
    </div>
  );
}

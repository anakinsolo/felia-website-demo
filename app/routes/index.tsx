import stylesheet from '~/assets/styles/pages/home.css';
import type { ActionArgs, LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import ContactSection, { links as contactSectionStylesheet } from '~/components/ContactSection';
import type { FormValues } from '~/services/mailservice.server';
import { sendMail } from '~/services/mailservice.server';
import { links as flashMessageStyles } from '~/components/FlashMessage';
import { useLoaderData } from '@remix-run/react';
import type { ISbStoriesParams } from '@storyblok/react';
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent
} from '@storyblok/react';


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
  let story = useLoaderData();
  story = useStoryblokState(story);

  return (
    <div className='container home'>
      <StoryblokComponent blok={story.content} />
      <section className='contact-section'>
        <ContactSection />
      </section>
    </div>
  );
}

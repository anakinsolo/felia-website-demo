import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export async function loader() {
  return redirect('/');
}

export async function action({ request }: ActionArgs) {
  let data = await request.formData();
  console.log(data.get('name'));
  console.log(data.get('phone'));
  console.log(data.get('email'));
  console.log(data.get('message'));
  return null;
}


export default function Contact() {
}
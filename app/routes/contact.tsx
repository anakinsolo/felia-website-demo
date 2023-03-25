import type { ActionArgs } from '@remix-run/node';

export async function action({ request }: ActionArgs) {
  console.log(request);
  let data = await request.formData();
  return {};
}


export default function Contact() {
}
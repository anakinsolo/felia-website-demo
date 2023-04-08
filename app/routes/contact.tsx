import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import type { FormValues } from '~/services/mailservice.server';
import { sendMail } from '~/services/mailservice.server';

export async function loader() {
  return redirect('/');
}
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  const data: FormValues = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    message: values.message
  };

  let result = sendMail(data);
  return json({ result }, { status: result.error ? 500 : 200 });
}
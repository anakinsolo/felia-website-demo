export interface FormValues {
  name: FormDataEntryValue;
  email: FormDataEntryValue;
  phone: FormDataEntryValue;
  message: FormDataEntryValue;
}

interface Result {
  message: string;
  error?: string;
}

export async function sendMail(values: FormValues): Promise<Result> {
  let nodemailer = require('nodemailer');
  if (!process.env.SEND_MAIL_PROVIDER
    || !process.env.SEND_MAIL_PROVIDER_HOST
    || !process.env.SEND_MAIL_PROVIDER_USERNAME
    || !process.env.SEND_MAIL_PROVIDER_PASSWORD
  ) {
    return { message: 'Something went wrong, check email settings', error: 'Email settings not found' };
  }

  const transporter = nodemailer.createTransport({
    service: process.env.SEND_MAIL_PROVIDER,
    port: 465,
    host: process.env.SEND_MAIL_PROVIDER_HOST,
    auth: {
      user: process.env.SEND_MAIL_PROVIDER_USERNAME,
      pass: process.env.SEND_MAIL_PROVIDER_PASSWORD,
    },
    secure: true,
  });

  let $html = `<div>${values.message}</div><p>Sent from email: ${values.email}</p><p>Sent from telphone: ${values.phone}</p>`;

  const mailData = {
    from: process.env.SEND_MAIL_PROVIDER_USERNAME,
    to: 'hello@felia.fi',
    subject: `A new contact message from ${values.name}`,
    text: `${values.message} | Sent from: ${values.message}  | tel: ${values.phone}`,
    html: $html,
  };

  try {
    await transporter.sendMail(mailData);
    return { message: 'Email sent successfully' };
  } catch (error) {
    return { message: 'Something went wrong, please try again', error: error.message };
  }
}
import nodemailer from 'nodemailer';
import 'dotenv/config';

const createTransporter = async () => {
  try {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.error(
        '[SYS] EMAIL_USER or EMAIL_PASS environment variables are missing.'
      );
      return null;
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
    });

    await transporter.verify();

    console.log('[SMTP] Gmail SMTP connection established successfully.');

    return transporter;
  } catch (error) {
    console.error('[SMTP ERROR]', error);
    return null;
  }
};

const transporter = await createTransporter();

export default transporter;

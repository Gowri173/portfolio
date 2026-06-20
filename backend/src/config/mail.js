import nodemailer from 'nodemailer';
import 'dotenv/config';

const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.warn('[SYS] WARNING: EMAIL_USER or EMAIL_PASS environment variables are missing. Email notifications will be disabled.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  });
};

const transporter = createTransporter();

export default transporter;

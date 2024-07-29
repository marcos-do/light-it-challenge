import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'peggie17@ethereal.email',
    pass: 'aR78QqEWFr1M8VJjJD',
  },
});

const SUBJECT = 'Patient Registration';
const TEXT = 'The following patient has been created:\n';

@Injectable()
export class EmailService {
  constructor() {}

  async sendMail(to: string, data: string) {
    await transporter.sendMail({
      from: 'peggie17@ethereal.email',
      to,
      subject: SUBJECT,
      text: TEXT + data,
    });
  }
}

import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'e74bebd6f556b8',
    pass: '98f6d9589f79e4',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <josepedro39cc@gmail.com>',
      to: 'Jose Pedro <josefelicidadepedro@gmail.com>',
      subject,
      html: body,
    });
  }
}

import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "contact@florianherrengt.com",
    pass: "eshnkeljvciripvz",
  },
});

export const sendEmail = ({ body }: { body: string }) => {
  return transporter.sendMail({
    subject: process.env.EMAIL_SUBJECT,
    text: [process.env.EMAIL_BODY, body, process.env.EMAIL_SIGNATURE]
      .filter((a) => a)
      .join("\n\n"),
    to: process.env.EMAIL_RECIPIENT,
    cc: process.env.EMAIL_RECIPIENT_CC,
  });
};

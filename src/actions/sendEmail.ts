"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const testEmail = process.env.TEST_EMAIL;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(senderEmail);
  console.log(message);
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [testEmail as string],
    subject: "Message from contact form",
    text: "Hello world",
  });
};

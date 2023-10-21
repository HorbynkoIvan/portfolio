"use server";

import { Resend } from "resend";
import { getErrorMessage, index } from "@/src/utils";

const resend = new Resend(process.env.RESEND_API_KEY);
const testEmail = process.env.TEST_EMAIL;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  //simple serverside validation
  if (!index(senderEmail, 500)) {
    return {
      error: "Invalid sender email!",
    };
  }

  if (!index(message, 5000)) {
    return {
      error: "Invalid sender email!",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [testEmail as string],
      subject: "Message from contact form",
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return data;
};

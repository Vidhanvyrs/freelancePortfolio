"use server";
import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
// import ContactFormEmail from "@/email/contact-form-email";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  console.log("Running on Server");
  const sender = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(sender, 500)) {
    return {
      error: "Invalid Message",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid E-mail",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "vidhanvyrs@gmail.com",
      subject: "Message from contact form",
      replyTo: sender,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: sender,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
//using third party Resend for  sending emails

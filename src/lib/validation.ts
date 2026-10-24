import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(120, "Email is too long."),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(140, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please write a slightly longer message.")
    .max(2000, "Message is too long."),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormValues = z.infer<typeof contactSchema>;

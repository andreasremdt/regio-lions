import type { APIRoute } from "astro";
import { z } from "astro:content";
import { escapeHtml, getEmailTemplate } from "@/lib/utils";

let schema = z.object({
  firstname: z
    .string({
      required_error: "Bitte geben Sie Ihren Vornamen an.",
    })
    .min(1, "Bitte geben Sie Ihren Vornamen an."),
  lastname: z
    .string({ required_error: "Bitte geben Sie Ihren Nachnamen an." })
    .min(1, "Bitte geben Sie Ihren Nachnamen an."),
  email: z
    .string({
      required_error: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    })
    .email(),
  phone: z.string().optional(),
  message: z
    .string({ required_error: "Bitte schreiben Sie mindestens 10 Zeichen." })
    .min(10, "Bitte schreiben Sie mindestens 10 Zeichen."),
});

export let POST: APIRoute = async ({ request }) => {
  let data = await request.formData();
  let result = schema.safeParse(Object.fromEntries(data.entries()));

  if (!result.success) {
    return new Response(null, { status: 400 });
  }

  try {
    let response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: import.meta.env.RESEND_SENDER,
        replyTo: result.data.email,
        to: import.meta.env.RESEND_RECIPIENT,
        subject: "Nachricht von Regio Lions Webseite",
        html: getEmailTemplate(escapeHtml(result.data)),
      }),
    });

    let data = await response.json();

    if (response.ok && data.id) {
      return new Response(null, { status: 200 });
    }

    throw new Error(response.statusText);
  } catch (error) {
    return new Response(null, { status: 400 });
  }
};

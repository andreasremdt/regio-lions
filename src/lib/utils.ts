import { getCollection } from "astro:content";

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export async function getNews(needsBody = false, limit = Infinity) {
  let news = await getCollection("news");

  return news
    .filter((entry) => (needsBody ? Boolean(entry.body) : true))
    .sort((a, b) => b.data.created_at.getTime() - a.data.created_at.getTime())
    .slice(0, limit);
}

type Email = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  phone?: string;
};

export function escapeHtml(data: Email) {
  function replace(html: string) {
    return html
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, replace(value)]),
  ) as Email;
}

export function getEmailTemplate({
  firstname,
  lastname,
  email,
  message,
  phone,
}: Email) {
  return `
    <p>Hallo!</p>  
    <p>Sie haben Sie eine Nachricht von <b>${firstname} ${lastname}</b> über die <a href="https://regio-lions.com">Regio Lions Webseite</a> erhalten:</p>
    <p>"${message}"</p>
    <p>Die Kontaktdaten des Absenders sind wie folgt:</p>
    <ul>
      <li><b>Name:</b> ${firstname} ${lastname}</li>
      <li><b>E-Mail:</b> ${email}</li>
      ${phone ? `<li><b>Telefon:</b> ${phone}</li>` : ""}
    </ul>
    <p>Sie können dem Absender schreiben in dem Sie direkt auf diese E-Mail antworten.</p>
  `;
}

export function trimDescription(text: string) {
  if (text.length > 150) {
    return `${text.slice(0, 147)}...`;
  }

  return text;
}
